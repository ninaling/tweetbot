var items=[
  {"id": "1", "author": "Pete Hunt", "text": "This is one comment"},
  {"id": "2", "author": "Jordan Walke", "text": "This is *another* comment"}
];

var TweetBox=React.createClass({
    getInitialState: function() {
        return {data: []};
    },
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

ReactDOM.render(<TweetBox/>, document.getElementById('container'));