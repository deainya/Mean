const express = require('express');
const router = express.Router();
const test = require('../mvc/controllers/test');

router.get('/', (req, res) => {
  test.index(req, res);
});

router.post('/testpst', (req, res) => {
  test.create(req, res);
});

router.get('/testget', (req, res) => {
  test.list(req, res);
});

module.exports = router;
