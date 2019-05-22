var friendsData = require("../data/friendsData");

module.exports = function(app) {
  app.get("/api/friendsData", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friendsData", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
   
      friendsData.push(req.body);
      res.json(true);
    
   
  });

};