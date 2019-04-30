var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

//const port = 3000

const port = process.env.PORT || 5001;

var stocks = require('./api/controllers/stocks')
var mappings = require('./api/controllers/mapping')
var swagger = require('./api/controllers/swagger')

var app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req,res,next)=>{
  //console.log(req.headers)
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
//X-Requested-With,Content-Type,authorization
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use("/api/mapping",mappings);
app.use('/api/stocks', stocks)
app.use('/api/docs', swagger.router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  console.error(`Error catched! ${err}`)

  const error = {
    status: err.status || 500,
    message: err.message
  }

  res.status(error.status).send(error)
})

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = app.address()
  const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
  console.log('\nListening on ' + bind)
}

app.listen(port)
app.on('error', onError)
app.on('listening', onListening)

console.log('Server started on port ' + port)
