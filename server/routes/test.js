const express = require('express');
const router = express.Router();
const test = require('../controllers/test');

router.get('/', function(req, res){
  test.index(req,res);
});

router.post('/testpst', function(req, res) {
  test.create(req,res);
});

router.get('/testget', function(req, res) {
  test.list(req,res);
});

module.exports = router;
