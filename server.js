var http = require('http')
   , express = require('express')
   , app = express()
   , bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var data = [ { "author": "John", "text": "Hello *world*!" } ];

app.get('/comments.json', function(req, res) {
   res.send(data);
});

app.post('/comments.json', function(req, res) {
   data.push({ 
         'author': req.param('author'),
         'text': req.param('text')
         });

   res.send(data);
});

app.listen(3000);

