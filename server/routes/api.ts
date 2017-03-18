// modules required for routing
let express = require('express');
let router = express.Router();

// define the game model
import game = require('../models/games');

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the games controller to access games collection in findById
let apiController = require('../controllers/games');

/* GET games List page. READ */
router.get('/games', usersController.RequireAuth, (req, res, next) => {
  apiController.ReadGameList(req, res);
});

//  GET the Game Details page in order to add a new Game
router.get('/games/add', usersController.RequireAuth, (req, res, next) => {
  apiController.DisplayAdd(req, res);
}).post('/add', usersController.RequireAuth, (req, res, next) => {
  // POST process the Game Details page and create a new Game - CREATE
  apiController.CreateGame(req, res);
});

// GET the Game Details page in order to edit a new Game
router.get('/games/:id', usersController.RequireAuth, (req, res, next) => {
  apiController.DisplayEdit(req, res);
}).post('/games/:id', usersController.RequireAuth, (req, res, next) => {
  // POST - process the information passed from the details form and update the document
  apiController.UpdateGame(req, res);
});

// GET - process the delete by user id
router.get('/games/delete/:id', usersController.RequireAuth, (req, res, next) => {
  apiController.DeleteGame(req, res);
});

module.exports = router;
