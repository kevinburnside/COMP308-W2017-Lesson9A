// modules required for the project
var express = require('express');
var path = require('path'); // part of node.js core
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// modules for authentication
var session = require('express-session');
var passport = require('passport');
var passportlocal = require('passport-local');
var LocalStrategy = passportlocal.Strategy;
var flash = require('connect-flash'); // displays errors / login messages
// import "mongoose" - required for DB Access
var mongoose = require('mongoose');
// URI
var config = require('./config/db');
mongoose.connect(process.env.URI || config.URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conneced to MongoDB...");
});
// define routers
var index = require('./routes/index'); // top level routes
var games = require('./routes/games'); // routes for games
var users = require('./routes/users'); // routes for users and auth
var api = require('.routers/api');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../node_modules')));
// setup session
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: true,
    resave: true
}));
// initialize passport and flash
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// route redirects
app.use('/', index); // top level links
app.use('/games', games); // games links - start with /games
app.use('/users', users); // users links - start with /users
app.use('/api', api);
// Passport User Configuration
var UserModel = require('./models/users');
var User = UserModel.User; // alias for the User Model - User object
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Handle 404 Errors
app.use(function (req, res) {
    res.status(400);
    res.render('errors/404', {
        title: '404: File Not Found'
    });
});
// Handle 500 Errors
app.use(function (error, req, res, next) {
    res.status(500);
    res.render('errors/500', {
        title: '500: Internal Server Error',
        error: error
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map