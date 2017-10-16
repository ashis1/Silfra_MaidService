var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require('uuid');
var Products = require('../models/schema');

var productRouter = express.Router();
productRouter.use(bodyparser.json());

productRouter.route('/products')
.get(function(req, res){
    Products.find({}, function(err, product){
        if(err) throw err;
        res.json(product);
    });
})
.post(function(req, res){
    Products.create(req.body,function(err, product){
        if(err) throw err;
        console.log(product);
        console.log(req.body);
        console.log(err);
         product= req.body;
         
      //  var id = product._id;
      //  var id = uuid.v1();
        res.end('Added product: '+ product);
    });
})

.delete(function(req, res, next){
    Products.remove({},function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

productRouter.route('/:prId')

.get(function(req, res, next){
    Products.findById(req.params.prId, function(err, product){
        if(err) throw err;
        res.json(product);
    });
})
.put(function(req, res, next){
    Products.findByIdAndUpdate(req.params.prId,{
        $set: req.body
    },{
        new: true
    }, function(err, product){
        if(err) throw err;
        res.json(product);
    });
})

.delete(function(req, res, next){
    Products.remove(req.params.prId, function(err, resp){
       if(err) throw err;
       res.json(resp);
    });
});

module.exports = productRouter;