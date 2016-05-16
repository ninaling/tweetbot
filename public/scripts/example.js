var UserForm = React.createClass({
  getInitialState: function() {
      var userState = {user: ""};
    return userState;
  },
    onChange : function(e){
        this.setState({user : e.target.value});
        console.log("USER: " + this.state.user);
    },
  handleUserChange: function(e) {
      console.log("ASDf");
    e.preventDefault();
    var user = this.state.user;
    if (!this.state.user) {
        console.log("what the: " + e.target.value);
      return;
    }
    this.props.onUserSubmit({user: e.target.value});
    this.setState({user: ''});
  },
  render: function() {
    return (
//        
//        <form className="searchForm" onSubmit={this.handleUserChange}>
//            <input 
//              type="text"
//              placeholder="@username"
//              value={this.state.user}
//              onChange={this.onChange}
//            />
//            <input type="submit" value="Search" />
//      </form>
      <form className="userForm" onSubmit={this.handleUserChange}>
        <input
          type="text"
          placeholder="@who would you like to stalk?"
          value={this.state.user}
          onChange={this.onChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
});

var TweetBox=React.createClass({
    getInitialState: function() {
    return {data: []};
  },
    handleSearchSubmit: function(user) {
        console.log('hai');
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'GET',
          data: user,
          success: function(tweets) {
            this.setState({data: tweets});
          }.bind(this),
          error: function(xhr, status, err) {
            this.setState({data: []});
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
  },
  render: function(){
    return( 
      <div className="tweetsBox">
        <h1>Tweets</h1>
        <TweetsList data={this.state.data} />
        <UserForm onUserSubmit={this.handleSearchSubmit}/>
      </div>
    );                   
  }
});

var TweetsList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function(tweet) {
      return (
        <div className="tweet">
          {tweet.text}
        </div>
      );
    });
    return (
      <div className="tweetsList">
        {tweetNodes}
      </div>
    );
  }
});

//          onChange={this.handleUserChange}

ReactDOM.render(<TweetBox url="/search"/>, document.getElementById('content'));

