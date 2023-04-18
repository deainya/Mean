const path = require('path');
const Test = require('../models/test');

exports.index = function (req, res) {
  res.sendFile(path.resolve('server/mvc/views/test.html'));
};

exports.create = async (req, res) => {
  var newTest = new Test(req.body);
  console.log(req.body);
  try {
    await newTest.save();
    res.redirect('/test/testget');
  } catch (err) {
    res.status(400).send('Unable to save record to database');
  }
};

exports.list = async (req, res) => {
  try {
    const tests = await Test.find({}).exec()
    console.log(tests);
    await res.render('testget', {
      tests: tests
    });
  } catch(err) {
    return res.status(500).send(err);
  }
};
