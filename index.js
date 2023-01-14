const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.use(function(req, res, next) {
  res.status(404);

  res.sendFile(path.join(__dirname, '/html/errors/404.html'));

});

app.use(function(req, res, next) {
    res.status(403);
  
    res.sendFile(path.join(__dirname, '/html/errors/403.html'));
  
});

app.listen(port, () => console.log(`Listening on port ${port}.`))
