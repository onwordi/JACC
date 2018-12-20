const path = require('path');

exports.get = (req, res) => {
res.sendFile(path.join(__dirname, '..', 'views', 'currentList.hbs'));
};

exports.get = (req, res) => {

res.render('currentList');
};
