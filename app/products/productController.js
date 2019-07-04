const express = require('express');
const router = express.Router();
const productService = require('./productService');
const verifyToken = require('../helpers/authMiddleware');



router.post('/add',verifyToken, addProduct);
router.get('/',getAllProducts);


module.exports = router;


function addProduct(req, res, next) {
    productService.add(req.body)
        .then(  product => res.json({message:'success'}))
        .catch(err => next(err));
}

function getAllProducts(req,res,next){
    productService.getAllProducts()
        .then(response => res.json(response))
        .catch(err => next(err));
}