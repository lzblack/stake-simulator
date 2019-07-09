var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('/home/guillermo/WebstormProjects/stake-simulator/public/client.html');
});

router.get('/data', function(req, res, next) {
  res.send('respond with a client resource');
});

module.exports = router;
