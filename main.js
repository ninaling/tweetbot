var http=require('http');
var express = require('express');  
var React = require('react');  

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'dpr0h0WQx5ZBPx9WnQAzcC7bh',
  consumer_secret: '0ASTXL3xkj2fN0FklCOQR4BCfyVtxq974cqNJPXmSeWSVzx30j',
  access_token_key: '726100001986740224-pvb41dzpkFm0icNmyBNYmeDZBxWiUnK',
  access_token_secret: 'JI7kZOkUiuJyd0tHGFuvRUtYy8jAfP7ySnj8aVle7HTDL'
});
 
var params = {
    screen_name: 'finkd',
    count: 15
};

var tweetsArr=[];

client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) console.log(error);
    else{
        tweets.forEach(function(tweet, i){
            tweets.push(tweet.text);
            console.log((i+1).toString()+": "+tweet.text);
        });
    }
});

var app=express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(3000, function () {
  console.log('listening on port 3000');
});

app.get('/*', function(req, res) {
    res.render('pages/index', {
        
    });
});


