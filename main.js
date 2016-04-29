var Tweet=React.createClass({
  render: function(){
    return(
      <div className="tweet_container">
        <span className="tweet_title">{this.props.itemNum}</span>
        <div className='tweet_message'>{this.props.message}</div>
      </div>
    );
  }
});

var items=['hello', 'what\'s up', 'how\'s it going'];
var n=items.size;

React.render(<Tweet itemNum="0" message="hi"/>, document.getElementById('container'));

for (var i=0; i<n; i++){
  React.render(<Tweet itemNum={i.toString()} message={items[i]}/>, document.getElementById('container'));
}
