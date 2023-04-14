const config = require('./config');

const express = require('express')
const http = require('http')
const path = require('path');

const app = express()
const port = config.port;
const dist = config.dist;

// default app route
app.use(express.static(__dirname + dist));
//html post
app.use(express.urlencoded({ extended: true }));

//view engine
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//json
//app.use(express.json());

//main route
app.get('/', (req, res) => {
  res.send('Main route is ok');
});

//test route
app.get('/test', (req, res) => {
  res.send('This is Hello World for Test!');
});

//alternative
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, dist, 'index.html'));
  console.log(path.join(__dirname, dist))
});*/
//const server = http.createServer(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
