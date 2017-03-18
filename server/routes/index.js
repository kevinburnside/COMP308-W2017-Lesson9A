// modules required for routing
var express = require('express');
var router = express.Router();
// require the index controller
var indexController = require('../controllers/index');
/* GET home page. wildcard */
router.get('/', function (req, res, next) {
    indexController.DisplayHome(req, res);
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    indexController.DisplayContact(req, res);
});
module.exports = router;
//# sourceMappingURL=index.js.map