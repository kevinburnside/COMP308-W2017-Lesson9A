var mongoose = require('mongoose');
// create a model class
var gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
}, {
    collection: "games"
});
module.exports = mongoose.model('games', gamesSchema);
//# sourceMappingURL=games.js.map