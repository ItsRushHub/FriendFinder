// Routes
var friendsData = require("../data/friends.js");
var path = require('path');

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

// API post to submit data
app.post("/api/friends", function(req, res) {
    var theMatch = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    };

    for(var i = 0; i < score.length; i++) {
        scores.push( parseInt(req.body.score[i]))
    }
    theMatch.scores = scoresData;
})














    
};