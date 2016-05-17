var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var Twitter=require('twitter');
var app = express();

var client = new Twitter({
  consumer_key: 'dpr0h0WQx5ZBPx9WnQAzcC7bh',
  consumer_secret: '0ASTXL3xkj2fN0FklCOQR4BCfyVtxq974cqNJPXmSeWSVzx30j',
  access_token_key: '726100001986740224-pvb41dzpkFm0icNmyBNYmeDZBxWiUnK',
  access_token_secret: 'JI7kZOkUiuJyd0tHGFuvRUtYy8jAfP7ySnj8aVle7HTDL'
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/search', function(req, res) {
    console.log("username: "+req.query.user);
    client.get('statuses/user_timeline', {screen_name: req.query.user, count: 15}, function(error, tweets, response){
        if (error) console.log(error);
        else{
            console.log(tweets);
            tweets.forEach(function(tweet, i){
                console.log((i+1).toString()+": "+tweet.text);
            });
            res.json(tweets);
        };

    });
});


app.listen(3000, function() {
  console.log('listening on port 3000');
});



 
