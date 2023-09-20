const Product = require('../models/product.model')
const Category = require('../models/category.model')
const {StatusCodes} = require('http-status-codes')
// const mongoose = require('mongoose')


module.exports = {
    create: async (req, res) => {
        const { name, price, category } = req.body
        const files = req.files;
        const fileToUpload = {}
        for(index in files){
            fileToUpload[index] = files[index].filename
        }
        try{
            const products = await Product.create({name: name, price: price, category_id: category, images: fileToUpload})
            return res.status(StatusCodes.CREATED).json({data: products._id, status: StatusCodes.CREATED})
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
    fetch: async (req, res) => {
        try{
            let products = await Product.find({})
            // console.log(products.length);
            if(products.length == 0){
                return res.status(StatusCodes.OK).json({data: `No Product to showcase.`, status: StatusCodes.OK})
            }
            return res.status(StatusCodes.OK).json({products})
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
    update: async (req, res) => {
        const {id: product_id} = req.params;
        const {name: name, category: category_id, price: price} = req.body
        const files = req.files;
        try{
            const validateProduct = await Product.findOne({_id: product_id})
            const validateCategory = await Category.findOne({_id: category_id})
            console.log(validateCategory._id)
            if(!validateProduct){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No Product with id: ${product_id}`, status: StatusCodes.NOT_FOUND}) 
            }
            if(!validateCategory){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No Category with id: ${category_id}`, status: StatusCodes.NOT_FOUND}) 
            }
            if(name === ''){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Please enter a product name.`, status: StatusCodes.BAD_REQUEST}) 
            }
            if(price === ''){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Please enter a product price.`, status: StatusCodes.BAD_REQUEST}) 
            }
            if(category_id === ''){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Please select a product category.`, status: StatusCodes.BAD_REQUEST}) 
            }
            if(files.length == 0){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Please select product images.`, status: StatusCodes.BAD_REQUEST}) 
            }
            const fileToUpload = {}
            for(index in files){
                fileToUpload[index] = files[index].filename
            }
            try{
                const product = await Product.findOneAndUpdate({_id: product_id}, {name: name, category_id: validateCategory._id, price: price, images: fileToUpload}, {new: true, runValidators: true})
                return res.status(StatusCodes.OK).json({data: product, status: StatusCodes.OK})
            }catch(error){
                //console.log(error)
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
            }
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
    delete: async (req, res) => {
        const {id} = req.params
        try{
            const product = await Product.findOne({_id: id})
            if(!product){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No category with id: ${id}`, status: StatusCodes.NOT_FOUND}) 
            }
            try{
                await Product.findOneAndDelete({_id: product.id})
                return res.status(StatusCodes.OK).json({data: `${product.name} was deleted successfully.`, status: StatusCodes.OK})
            }catch(error){
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
            }
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
}

