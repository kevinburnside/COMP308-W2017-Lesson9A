// Display the Home Page
module.exports.DisplayHome = function (req, res) {
    res.render('content/index', {
        title: 'Home',
        games: '',
        displayName: req.user ? req.user.displayName : ''
    });
};
// Displays the Contact Page
module.exports.DisplayContact = function (req, res) {
    res.render('content/contact', {
        title: 'Contact',
        games: '',
        displayName: req.user ? req.user.displayName : ''
    });
};
//# sourceMappingURL=index.js.map