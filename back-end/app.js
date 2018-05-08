var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

/* acrescentado 10/03 */ var methodOverride = require('method-override');
var mongoose = require('mongoose');

var db = 'mongodb://localhost/estoque';

// Conecta-se ao MongoDb
mongoose.connect(db);

// Eventos do banco de dados
mongoose.connection.on('connected', function() {
  console.log('Mongoose! conectado a ' + db);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose! desconectado de' + db);
});

mongoose.connection.on('error', function(erro) {
  console.log('Mongoose! Erro de conexão: ' + erro);
});

// Fecha a conexão em caso de término por Ctrl+C (SIGINT)
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose! Sinal SIGINT recebido; desconectado.');
    // 0 indica que a finalização ocorreu sem erros
    process.exit(0);
  });
});

var index = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var contatos = require('./routes/contatos');
var produto = require('./routes/produto');
var categoria = require('./routes/categoria');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* acrescentado 10/03 */ app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/about', about);
app.use('/contatos', contatos);
app.use('/produto', produto);
app.use('/categoria', categoria);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
