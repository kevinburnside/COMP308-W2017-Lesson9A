"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules required for routing
var express = require('express');
var router = express.Router();
// require the users controller for authentication
var usersController = require('../controllers/users');
// require the games controller to access games collection in findById
var apiController = require('../controllers/games');
/* GET games List page. READ */
router.get('/games', usersController.RequireAuth, function (req, res, next) {
    apiController.ReadGameList(req, res);
});
//  GET the Game Details page in order to add a new Game
router.get('/games/add', usersController.RequireAuth, function (req, res, next) {
    apiController.DisplayAdd(req, res);
}).post('/add', usersController.RequireAuth, function (req, res, next) {
    // POST process the Game Details page and create a new Game - CREATE
    apiController.CreateGame(req, res);
});
// GET the Game Details page in order to edit a new Game
router.get('/games/:id', usersController.RequireAuth, function (req, res, next) {
    apiController.DisplayEdit(req, res);
}).post('/games/:id', usersController.RequireAuth, function (req, res, next) {
    // POST - process the information passed from the details form and update the document
    apiController.UpdateGame(req, res);
});
// GET - process the delete by user id
router.get('/games/delete/:id', usersController.RequireAuth, function (req, res, next) {
    apiController.DeleteGame(req, res);
});
module.exports = router;
//# sourceMappingURL=api.js.map