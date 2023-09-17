const Category = require('../models/category.model')
const {StatusCodes} = require('http-status-codes')


module.exports = {
    create: async (req, res) => {
        const {name}=req.body
        try{
            const category = await Category.create({name: name})
            return res.status(StatusCodes.CREATED).json({data: category.name, status: StatusCodes.CREATED})
        }catch(error){
            if(error.keyPattern.name == 1){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Category name must be unique.`})
            }
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
    fetch: async (req, res) => {
        try{
            const category = await Category.find({})
            if(!category){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No category to display.`, status: StatusCodes.NOT_FOUND})
            }
            return res.status(StatusCodes.OK).json({data: category, status: StatusCodes.OK})
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
        
    },
    fetchSingle: async (req, res) => {
        const {id: id} = req.params;
        try{
            const category = await Category.findOne({_id: id})
            if(!category){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No category with id: ${id}`, status: StatusCodes.NOT_FOUND})
            }
            return res.status(StatusCodes.OK).json({data: category, status: StatusCodes.OK})
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
        
    },
    update: async (req, res) => {
        const {id} = req.params
        const {name} = req.body
        try{
            const category = Category.findOne({_id: id})
            if(!category){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No category with id: ${id}`, status: StatusCodes.NOT_FOUND}) 
            }
            try{
                const newResult = await Category.findOneAndUpdate({_id: id}, {name: name}, {new: true, runValidators: true})
                return res.status(StatusCodes.OK).json({data: newResult, status: StatusCodes.OK})
            }catch(error){
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
            }
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
    delete: async (req, res) => {
        const {id} = req.params
        try{
            const category = await Category.findOne({_id: id})
            if(!category){
                return res.status(StatusCodes.NOT_FOUND).json({data: `No category with id: ${id}`, status: StatusCodes.NOT_FOUND}) 
            }
            try{
                await Category.findOneAndDelete({_id: category.id})
                return res.status(StatusCodes.OK).json({data: `${category.name} was deleted successfully.`, status: StatusCodes.OK})
            }catch(error){
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
            }
        }catch(error){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    }
}





