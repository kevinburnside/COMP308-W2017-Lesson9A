var mongoose = require('mongoose');
// define the game model
var game = require('../models/games');
// Read and display the Game List
module.exports.ReadGameList = function (req, res) {
    // find all games in the games collection
    game.find(function (err, games) {
        if (err) {
            return console.error(err);
        }
        else {
            res.status(200).json(games);
            /* res.render('games/index', {
               title: 'Games',
               games: games,
               displayName: req.user.displayName
             });*/
        }
    });
};
// displays the Details page - allowing users to add a new Game
module.exports.DisplayAdd = function (req, res) {
    res.render('games/details', {
        title: "Add a new Game",
        games: '',
        displayName: req.user.displayName
    });
};
// Create a new game and insert it into the db
module.exports.CreateGame = function (req, res) {
    var newGame = game({
        "name": req.body.name,
        "cost": req.body.cost,
        "rating": req.body.rating
    });
    game.create(newGame, function (err, game) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/games');
        }
    });
};
// Displays the Details page to Update a Game
// find the game by id and populate the form
module.exports.DisplayEdit = function (req, res) {
    try {
        // get a reference to the id from the url
        var id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
        // find one game by its id
        game.findById(id, function (err, games) {
            if (err) {
                console.log(err);
                res.end(error);
            }
            else {
                // show the game details view
                res.render('games/details', {
                    title: 'Game Details',
                    games: games,
                    displayName: req.user.displayName
                });
            }
        });
    }
    catch (err) {
        console.log(err);
        res.redirect('/errors/404');
    }
};
// Update an existing Game in the games collection
module.exports.UpdateGame = function (req, res) {
    // get a reference to the id from the url
    var id = req.params.id;
    var updatedGame = game({
        "_id": id,
        "name": req.body.name,
        "cost": req.body.cost,
        "rating": req.body.rating
    });
    game.update({ _id: id }, updatedGame, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the game List
            res.redirect('/games');
        }
    });
};
// Deletes a game from the games collection
module.exports.DeleteGame = function (req, res) {
    // get a reference to the id from the url
    var id = req.params.id;
    game.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the games list
            res.redirect('/games');
        }
    });
};
//# sourceMappingURL=games.js.map