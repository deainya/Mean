const config = require('./config');

const mongo = require('./mongo');
const express = require('express')
const app = express()
const port = config.port;
const dist = config.dist;
const path = __dirname + dist;
const router = express.Router();
const test = require('./routes/test');
//const http = require('http')
//const path = require('path');

//https
app.use(express.urlencoded({ extended: true }));
//dist
app.use(express.static(path));
console.log(path);
//view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//json
//app.use(express.json());

//main route
//app.get('/', (req, res) => {
//  res.send('Main route is ok');
//});

//test route
//app.get('/test', (req, res) => {
//  res.send('This is Hello World for Test!');
//});
//alternative test route
app.use('/test', test);

//alternative for html
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, dist, 'index.html'));
  console.log(path.join(__dirname, dist))
});
const server = http.createServer(app);*/

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
