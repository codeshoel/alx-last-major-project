const service = require('../services/category.services')

module.exports ={
    createCategory: async (req, res) => {
        const response = await service.create(req, res)
        return response;
    },
    fetchCategories: async (req, res) => {
        const response = await service.fetch(req, res)
        return response;
    },
    fetchSingleCategory: async (req, res) => {
        const response = await service.fetchSingle(req, res)
        return response;
    },
    updateCategories: async (req, res) => {
        const response = await service.update(req, res)
        return response;
    },
    deleteCategories: async (req, res) => {
        const response = await service.delete(req, res)
        return response;
    },
}