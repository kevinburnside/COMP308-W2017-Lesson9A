// modules required for routing
var express = require('express');
var router = express.Router();
// require the users controller
var usersController = require('../controllers/users');
// GET /login - render the login view
router.get('/login', function (req, res, next) {
    usersController.DisplayLogin(req, res);
    // POST /login - process the login attempt
}).post('/login', usersController.ProcessLogin());
// GET /register - render the registration view
router.get('/register', function (req, res, next) {
    usersController.DisplayRegistration(req, res);
}).post('/register', function (req, res, next) {
    // POST / register - process the registration submission
    usersController.ProcessRegistration(req, res);
});
// GET /logout - process the logout request
router.get('/logout', function (req, res, next) {
    usersController.ProcessLogout(req, res);
});
module.exports = router;
//# sourceMappingURL=users.js.map