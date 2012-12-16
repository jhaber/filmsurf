var express = require('express');

var router = express();

router.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 8000;
router.listen(port);

console.log("Server running at http://localhost:" + port);
