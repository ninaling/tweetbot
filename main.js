var http=require('http');
var twitter=require('twitter');
var express = require('express');  
var React = require('react');  
var ReactDOMServer = require('react-dom/server');
var jsx = require('node-jsx');  

var element = React.createElement('div', null, 'Hello World!');
console.log(ReactDOMServer.renderToString(element));

var app=express();

//var Tweets=require('./public/react.jsx');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(3000, function () {
  console.log('listening on port 3000');
});

jsx.install();
//var Books = require('./views/index.jsx');

app.get('/*', function(req, res) {

    res.render('pages/index', {
        
    });
});
//
//require('babel/register')
//
//var express = require('express')
//  , app = express()
//  , React = require('react')
//  , ReactDOM = require('react-dom/server')
//  , components = require('./public/components.js')
//
//var HelloMessage = React.createFactory(components.HelloMessage)
//
//
//app.engine('pug', require('pug').__express)
//app.set('view engine', 'pug')
//
//app.use(express.static(__dirname + '/public'))
//
//app.get('/', function(req, res){
//  res.render('index', {
//    react: ReactDOM.renderToString(HelloMessage({name: "John"}))
//  })
//})
//
//app.listen(3000, function() {
//  console.log('Listening on port 3000...')
//})