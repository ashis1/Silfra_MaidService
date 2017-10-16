var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require('uuid');
var posts = require('../models/posts');
var works = require('../models/worktype');
var users = require('../models/user');
var requirement = require('../models/requirment');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport');

router.get('/api/works', function (req, res, next) {
    
    works.find(function (err, Work) {
        if (err) { return next(err) }
        res.json(Work);
    });
});

router.get('/session', function (req, res, next) {
    if (!req.session.user) {
        return res.status(401).send();
    }
    return res.status(200).send("super secret api");
});


router.post('/api/works', function (req, res, next) {
   
    works.create(req.body).then(function (err, Work) {
        if (err) { return next(err); }
        res.send(res);
    });
});

router.get('/api/requirements', function (req, res, next) {
    requirement.find(function (err, Post) {
        if (err) { return next(err); }
        res.json(Post);
    });
});

router.post('/api/requirements', function (req, res, next) {
    requirement.create(req.body).then(function (err, Post) {
        //if (err) { return next(err) }
   
            res.send(Post);
        
    });
});

router.get('/api/register', function (req, res, next) {
 
    users.find(function (err, Register) {
        if (err) { return next(err); }
        res.json(Register);
    });
});

router.get('/api/register/byId/:id', function (req, res, next) {
    var id = req.params['id']
   users.findById(id).then(function (Post) {
        res.send(Post);
    });
 
});


router.post('/api/register', function (req, res) {

    const Name = req.body.Name;
    const PhoneNo = req.body.PhoneNo;
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const RePassword = req.body.RePassword;
    const City = req.body.City;
    const Locality = req.body.Locality;
    const FullAddress = req.body.FullAddress;
    const Landmark = req.body.Landmark;

    //req.checkBody('Name', 'Name is Required').notEmpty();
    //req.checkBody('PhoneNo', 'PhoneNo is Required').notEmpty();
    //req.checkBody('UserName', 'UserName is Required').notEmpty();
    //req.checkBody('UserName', 'Invalid Email..!').isEmail();
    //req.checkBody('Password', 'Password is Required').equals(req.body.Password);
    //req.checkBody('RePassword', 'Password do not match.!').notEmpty();
    //req.checkBody('City', 'City is Required').notEmpty();
    //req.checkBody('Locality', 'Locality is Required').notEmpty();
    //req.checkBody('FullAddress', 'FullAddress is Required').notEmpty();
    //req.checkBody('Landmark', 'Landmark is Required').notEmpty();

    //var errors = req.validationErrors();

    //if (errors) {
    //    res.render('/admin', {
    //        errors: errors
    //    });
    //}
  //  else {
        let newUser = new users({
            Name: Name,
            PhoneNo: PhoneNo,
            UserName: UserName,
            Password: Password,
            RePassword: Password,
            City: City,
            Locality: Locality,
            FullAddress: FullAddress,
            Landmark: Landmark
        });
 //   }
  
  
 
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.Password, salt, function (err, hash) {
            if (err) {
                console.log(err);
            }
            newUser.Password = hash;
            newUser.save(function (err, saveUser) {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
                else {
                     
                 
                    return res.json(200).send();
                    res.redirect('/');
                    res.end();
                }  
            })
        });
    })
});

//login process




router.post('/api/login', function (req, res, next) {
    console.log(req);
    passport.authenticate('local', {
        successRedirect: '/auth',
        failureRedirect: '/'
      //  failureFlash: true
    })(req, res, next);
});

router.get('/api/logout', function (req, res) {
    req.logout();
});


router.get('/api/posts', function (req, res, next) {
  posts.find(function (err, Post) {
    if (err) { return next(err); }
    res.json(Post);
  });
});


router.post('/api/posts', function (req, res, next) {
	posts.create(req.body).then(function(err, Post){
    if(err) { return next(err); }
       res.send(res);
	});
});

// Map logic to route parameter 'post'
router.get('/api/posts/:id', function (req, res, next, id) {
  var query = posts.findById(id);
  console.log(id);
  consol.log(query);
res.send(query);
 
});

router.delete('/api/posts/del',function(req,res,next){
    posts.remove().then(function (Post) {
        res.send(Post);
    });

});

router.delete('/api/posts/del/:id', function (req, res, next) {
    posts.findByIdAndRemove(_id).then(function (Post) {
        res.send(Post);
    });

});
// Map logic to route parameter 'comment'
router.param('comment', function (req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment) {
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }

    req.comment = comment;
    return next();
  });
});
// Get single post
router.get('/posts/:post', function (req, res) {
  req.post.populate('comments', function (err, post) {
    res.json(post);
  });
});
// Delete post
router.delete('/posts/:post', function (req, res, next) {
    req.post.comments.forEach(function (id) {
        Comment.remove({
            _id: id
        }, function (err) {
            if (err) { return next(err); }
        });
    });
  Post.remove({
    _id: req.params.post
  }, function (err, post) {
    if (err) { return next(err); }

    // get and return all the posts after you delete one
    Post.find(function (err, posts) {
      if (err) { return next(err); }

      res.json(posts);
    });
  });
});
// Upvote post
router.put('/posts/:post/upvote', function (req, res, next) {
  req.post.upvote(function (err, post) {
    if (err) { return next(err); }

    res.json(post);
  });
});
// Upvote comment
router.put('/posts/:post/comments/:comment/upvote', function (req, res, next) {
  req.comment.upvote(function (err, comment) {
    if (err) {
      return next(err);
    }

    res.json(comment);
  });
});
// Post comment
router.post('/posts/:post/comments', function (req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;
  comment.save(function (err, comment) {
    if (err) { return next(err); }

    req.post.comments.push(comment);
    req.post.save(function (err, post) {
      if (err) { return next(err); }

      res.json(comment);
    });
  });
});

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
