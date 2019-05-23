var friendsData = require("../data/friendsData");

module.exports = function(app) {
  app.get("/api/friendsData", function(req, res) {
    res.json(friendsData);
  });





app.post('/api/friendsData', function(req,res){
  //grabs the new friend's scores 
  var newFriend =
  {name:req.body.name,
   photo: req.body.photo,
  Scores: []
  }
  var scoresArray = [];

  for(var i=0; i < req.body.scores.length; i++){
    scoresArray.push( parseInt(req.body.scores[i]) )
  }
  newFriend.scores = scoresArray;

 
// Compare the new friend entry with the existing ones
var scoreComparisionArray = [];
  for(var i=0; i<friendsData.length; i++){
    var currentComparison = 0;
    //run through scores to compare friends
    for(var j=0; j < newFriend.scores.length; j++){
      currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
    }

    //push results into scoresArray
    scoreComparisionArray.push(currentComparison);
  }

  //after all friends are compared, find best match
  var bestMatchPosition = 0; 
  for(var i=1; i < scoreComparisionArray.length; i++){
      
    // Lower number in comparison difference means better match
    if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
      bestMatchPosition = i;
    }

  }

  //return bestMatch data
  var bestFriendMatch = friendsData[bestMatchPosition];
  
  res.json(bestFriendMatch);

  //pushes new submission into the friendsList array
  friendsData.push(newFriend);
});
};