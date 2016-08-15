//Main starting point of the application
const express = require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const app = express();
const router = require('./router');

//App Setup
app.use(morgan('combined'));//debugging
app.use(bodyParser.json({type:'*/*'}));//incoming request hhtp/anyrequest

router(app);


render(
  <div >Hello App</div>,
  document.getElementById('app')
)

//a comment


//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(App);
server.listen(port);
consol.log('server listening on:', port)