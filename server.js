var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine(".handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", ".handlebars");

var PORT = process.env.PORT || 8080;

var surveyQuestions = [
    {
        question: "You love going on vacation every year."
    },
    {
        question: "Family matters alot to you."
    },
    {
        question: "You can't see yourself without a pet."
    },
    {
        question: "You work hard and play hard."
    },
    {
        question: "You are a huge social person."
    },
    {
        question: "You like hanging out with friends."
    },
    {
        Question: "You like to relax bing watching movies."
    },
    {
        Question: "You are a big fan of sports."
    },
    {
        Question: "You like going to a resturant every week."
    }





];










app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });