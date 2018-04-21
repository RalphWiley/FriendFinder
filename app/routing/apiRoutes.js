var friendList = require('../data/friends.js');

module.exports = function(app){
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function(req, res){
        //grabs new friend's results to compare with friends in friendList array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //runs through current friends
        for(var i = 0; i < friendList.length; i++){
            var scoreDiff = 0;
            //runs through all scores to compare all friends
            for(var x = 0; x < newFriendScores.length; x++){
                scoreDiff += (Math.abs(parseInt(friendList[i].scores[x]) - parseInt(newFriendScores[x])));
            }

            //push results into scoresArray
            scoresArray.push(scoreDiff);
        }

        //after all scores are compared, this loop finds best match
        for(var i = 0; i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        //returns bestMatch data
        var bff = friendList[bestMatch];
        res.json(bff);

        //push new submission into friendsList array
        friendList.push(req.body);
    });
};