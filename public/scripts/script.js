var UserForm = React.createClass({
  getInitialState: function() {
      var userState = {user: ""};
    return userState;
  },
    onChange : function(e){
        this.setState({user : e.target.value});
    },
  handleUserChange: function(e) {
    e.preventDefault();
    if (!this.state.user) {
        console.log("what the");
      return;
    }
    this.props.onUserSubmit({user: this.state.user});
    this.setState({user: ''});
  },
  render: function() {
    return (
      <form className="user_form" onSubmit={this.handleUserChange}>
        <input
          className="form_input"
          type="text"
          placeholder="@who would you like to stalk?"
          value={this.state.user}
          onChange={this.onChange}
        />
        <input className="form_submit" type="submit" value="Search" />
      </form>
    );
  }
});

var TweetBox=React.createClass({
    getInitialState: function() {
        return {data: []};
      },
    handleSearchSubmit: function(user) {
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
        <div className="header">nina's tweetbot</div>
        <UserForm onUserSubmit={this.handleSearchSubmit}/>
        <TweetsList data={this.state.data} />
      </div>
    );                   
  }
});

var TweetsList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function(tweet) {
        if (parseInt(tweet.score)<-2) {
          return (
            <div className="tweet negative">
              {tweet.text}
            </div>
          );
        }
        else if (parseInt(tweet.score)<0) {
          return (
            <div className="tweet negative_lite">
              {tweet.text}
            </div>
          );
        }
        else if (parseInt(tweet.score)==0) {
          return (
            <div className="tweet neutral">
              {tweet.text}
            </div>
          );
        }
        else if (parseInt(tweet.score)<3) {
          return (
            <div className="tweet positive_lite">
              {tweet.text}
            </div>
          );
        }
        else {
          return (
            <div className="tweet positive">
              {tweet.text}
            </div>
          );
        }
    });
    return (
      <div className="tweetsList">
        {tweetNodes}
      </div>
    );
  }
});

ReactDOM.render(<TweetBox url="/search"/>, document.getElementById('content'));

