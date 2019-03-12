app.get("/survey", function(req,res) {
    res.render("home", surveyQuestions[0]);
});

app.get("/home.html", function(req, res) {
    res.render("all-surveyQuestions", {
        survey: surveyQuestions
    });
});