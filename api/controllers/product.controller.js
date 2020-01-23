const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
    const products = Product.find() 
    res.json(products);
}; 