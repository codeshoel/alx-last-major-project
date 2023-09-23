const service = require('../services/cart.services')


module.exports = {
    addItem: async (req, res) => {
        const response = await service.addItem(req, res)
        return response;
    },
    fetchItems: async (req, res) => {
        const response = await service.fetchItems(req, res)
        return response;
    },
    updateItem: async (req, res) => {
        const response = await service.updateItem(req, res)
        return response;
    },
    deleteItem: async (req, res) => {
        const response = await service.deleteItem(req, res)
        return response;
    }
}