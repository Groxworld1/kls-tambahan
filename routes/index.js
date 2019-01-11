var express = require('express');
var router = express.Router();

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bunis",
  password: ''
});

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

router.use(passport.initialize());

passport.use(new FacebookStrategy({
  clientID : '383091742457628',
  clientSecret : '2ec5e5b8c64497851473c27ec7ca08c6',
  callbackURL: 'https://cordova8492.herokuapp.com/authFacebook/done',
  profileFields: ['id', 'name', 'email']
}, function(accessToken, refreshToken, profile, done){
  return done(null, profile);
}))

passport.use(use);

passport.serializeUser(function(profile,done){
  return done(null, profile);
})

passport.deserializeUser(function(profile,done){
  return done(null, profile);
})

router.get('/authFacebook', passport.authenticate('facebook'));
router.get('/authFacebook/done', passport.authenticate('facebook', {failureRedirect: '/'}), function(req,res){
  //return res.json(req.user);
  let fbID = req.user.id;
  let query = "SELECT * FROM users WHERE fbID = ?"

  connection.query(query, [fbID], function(err, results){
    if(err){
      res.json({ms: "Error query"})
    }

    if(results.length === 0){
      return res.redirect('/register?fbID=' + fbID);
    }

    else{
      return res.redirect('/home?userID=' + results[0].id)
    }
  })
});

router.post('/doRegister', function(req, res){
  let username = req.body.username;
  let fbID = req.body.fbID;
  let password = req.body.password;

  let query = "INSERT INTO users(fbID, username, password) VALUES(?, ?, ?)"
  let params = [fbID, username, password];

  connection.query(query, params, function(err, results){
    if(err){
      res.json({msg: "Query Error"})
      throw err;
    }

    return res.redirect('/home');
  })
})

router.get('/register', function(req, res) {
  res.render('register');
});

router.get('/home', function(req, res) {
  res.render('home');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
