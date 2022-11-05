const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https')
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const port = 80;

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

////////////////////////////////////////////////
// BASE ENDPOINTS
////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/tos', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/tos.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/privacy.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/about.html'));
});

////////////////////////////////////////////////
// DOCUMENTATION
////////////////////////////////////////////////
app.get('/docs/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/main.html'));
});

//basics
app.get('/docs/introduction', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/basics/introduction.html'));
});

app.get('/docs/suggestion-system', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/basics/suggestion.html'));
});

app.get('/docs/automoderation', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/basics/automoderation.html'));
});

app.get('/docs/moderation', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/basics/moderation.html'));
});

app.get('/docs/giveaways', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/docs/basics/giveaways.html'));
});

//for developers

////////////////////////////////////////////////
// REDIRECTS
////////////////////////////////////////////////
app.get('/discord', (req, res) => {
  res.redirect("https://discord.gg/fhJHkgJ77K");
});

app.get('/instagram', (req, res) => {
  res.redirect("https://instagram.com/aumb.online");
});

app.get('/twitter', (req, res) => {
  res.redirect("https://twitter.com/Pedrexik");
});

app.get('/youtube', (req, res) => {
  res.redirect("https://youtube.com/c/@Pedrex");
});

////////////////////////////////////////////////
// ERROR PAGES
////////////////////////////////////////////////
app.use(function(req, res, next) {
  res.status(404);

  res.sendFile(path.join(__dirname, '/html/errors/404.html'));

});

app.use(function(req, res, next) {
    res.status(403);
  
    res.sendFile(path.join(__dirname, '/html/errors/403.html'));
  
});

app.listen(port, () => console.log(`Listening on port ${port}.`))
