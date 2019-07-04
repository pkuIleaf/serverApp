
const Product = require('./productModel');

async function add(productParam) {
    const product = new Product(productParam);
   await product.save();
}

async function getAllProducts(){
    return await Product.find()
}

module.exports = {
    add,
    getAllProducts
};