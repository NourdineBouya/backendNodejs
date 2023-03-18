const Product = require('../models/ProductsModel')


 const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json(products)
}

const addProduct = async (req, res) => {
    const product = await Product.create({
        title : req.body.title
    })
    res.send(product)
}
const updateProduct = async (req, res) => {
    
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updateProduct)
}

const deleteProduct = async (req, res) => {
    
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteProduct)
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}