// Routes
var path = require('path');

module.exports = function (app) {
    app.get("/home.html", function(req, res) {
        res.render("all-surveyQuestions", {
            survey: surveyQuestions
        });

        app.get("/survey", function(req,res) {
            res.render("home", surveyQuestions[0]);
        });
        
        });
}








