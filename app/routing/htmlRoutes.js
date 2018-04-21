// Dependencies
var path = require('path');

//Routing

module.exports = function(app){
//route to survey page
  app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
//default catch all route that leads to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};