var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require('uuid');
var works = require('../models/worktype');

var router = express.Router();

router.get('/works', function (req, res, next) {
    console.log("Get Works");
    works.find(function (err, Work) {
        if (err) { return next(err); }
        res.json(Work);
    });
});


router.post('/works', function (req, res, next) {
    console.log("Post Works");
    works.create(req.body).then(function (err, Work) {
        if (err) { return next(err); }
        res.send(res);
    });
});



router.delete('/api/works/del', function (req, res, next) {
    works.remove().then(function (Work) {
        res.send(Work);
    });

});








/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
