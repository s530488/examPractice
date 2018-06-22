var express = require('express');
var router = express.Router();
var User = require("../model/user")
 
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
 
// save user
router.post('/saveUser', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details" })
  }
  var userObj = new User(req.body);
  userObj.save(function(err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err : err })
    }
    else {
      res.status(200).json({ msg: "user record saved successfully", data : data})
    }
  });
})
// get user List
router.get('/getUserList', function (req, res, next) {
User.find({},function(err,results){
  if (err) {
    res.status(403).json({ msg: "something bad", err })
  }
  else {
    res.status(200).json({ msg: "user record fetched successfully",data:results })
  }
})
});

// get last user entered
router.get('/getUserLast', function (req, res, next) {
  User.find({},function(err,results){
var lastRecord
      // console.log(results.length);
          if(results.length>0)
            {
              lastRecord=results[results.length-1]
            }
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "user record fetched successfully",data:lastRecord })
    }
  })
  });
  

 
module.exports = router;