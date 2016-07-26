var port = 80;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var DATA = ["item 1","item 2","item 3"];

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getTodo', function (req, res) {
    res.send(DATA);
});
app.use(bodyParser.json());

app.post('/setTodo', function (req, res) {
    var userjson = req.body;
DATA = req.body;
    console.log(userjson);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
