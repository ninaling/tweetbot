var items=['hello', 'what\'s up', 'how\'s it going'];
var n=items.length;

var Tweet=React.createClass({
  render: function(){
    var tweetsList=items.map(function(message, i){
      return(
        <div className="tweet_container">
          <span className='tweet_title'>{i.toString()}</span>
          <div className='tweet_message'>{message}</div>
        </div>
      );
    });
    return( <ul>{tweetsList}</ul> );
  }
});

ReactDOM.render(<Tweet/>, document.getElementById('container'));
