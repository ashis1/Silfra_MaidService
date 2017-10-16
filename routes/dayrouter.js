var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require('uuid');
var days = require('../models/days');

var dayRouter = express.Router();

dayRouter.get('/api/days', function (req, res) {
    days.find(function (err, Day) {
        if (err) { return (err); }
        res.json(Day);
    });
});


dayRouter.post('/api/days', function (req, res) {
    console.log("HELLO WORLD");
    days.create(req.body).then(function (err, Day) {
        if (err) { return (err); }
        res.send(Day);
    });
});

//dayRouter.get('/', function (req, res, next) {
//    res.render('index', { title: 'Express' });
//});

module.exports = dayRouter;