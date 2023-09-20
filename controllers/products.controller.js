const service = require('../services/products.services')


module.exports = {
    createProduct: async (req, res) => {
        const response = await service.create(req, res)
        return response;
    },
    fetchProduct: async (req, res) => {
        const response = await service.fetch(req, res)
        return response;
    },
    updateProduct: async (req, res) => {
        const response = await service.update(req, res)
        return response;
    },
    deleteProduct: async (req, res) => {
        const response = await service.delete(req, res)
        return response;
    }
}
