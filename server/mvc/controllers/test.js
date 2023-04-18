const path = require('path');
const Test = require('../models/test');

exports.index = function (req, res) {
  res.sendFile(path.resolve('server/mvc/views/test.html'));
};

exports.create = function (req, res) {
  var newTest = new Test(req.body);
  console.log(req.body);
  newTest.save(function (err) {
    if(err) {
      res.status(400).send('Unable to save record to database');
    } else {
      res.redirect('/test/testget'); //WTF??? - test.html?
    }
  });
};

exports.list = function (req, res) {
  Test.find({}).exec(function (err, tests) {
    if (err) {
      return res.send(500, err);
    }
    res.render('testget', {
      tests: tests
    });
  });
};
