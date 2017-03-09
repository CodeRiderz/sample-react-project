var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 3000; // change to 3000 if up

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/assets', express.static(path.join(__dirname, 'dist')));


app.get('/dev/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});


app.get('*', function (req, res) {
  var hash = JSON.parse(fs.readFileSync(path.join(__dirname, 'hash.json'), 'utf8'))
  res.render('production', {
    hash: hash
  })
});

app.listen(PORT, function () {
  console.log("App listening on port: " + PORT);
});
