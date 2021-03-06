var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  User.authenticate()(req.body.username, req.body.password,(err, user, options)=>{
    if (err) return res.status(500).json({
      success:false,
      title:'Error',
      response: err
    });
    if (user === false) {
      console.log("unauthroized")
      res.json({
        success: false,
        title: 'Error',
        response: options.message
      });
    } else {
        req.login(user,(err)=>{
           if (err) return res.status(500).json({
            success:false,
            title:'Error',
            response:err
          });
          console.log(req.user);
          res.status(200).json({
            success: true,
            title: 'Success',
            response: user,
            redirect:'/todos'
          });
        });
      }
  });
});

router.post('/signup', function(req, res){
  console.log("onsignup")
  console.log(req.body)
  User.register(new User({
    username: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }), req.body.password, function(err, user){
    if(err){
      console.log("onerror")
      console.log(err);
      return res.send({
        success: false,
        title: 'ERROR',
        response: err
      }); 
    }
    console.log("onsuccess")
    return res.status(201).json({
      success: true,
      redirect: '/login'
    });
  });
});


router.get('/getUser', (req, res)=>{
  const user = req.user;
  console.log(user);
  res.json({
    response: user
  });
});


router.post('/logout', (req, res)=>{
  req.logout();
  req.session.destroy();
  res.json({
    redirect:'/'
  });
});

module.exports = router;
