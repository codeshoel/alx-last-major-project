const service = require('../services/user.services');


module.exports = {
    signUp: async (req, res) => {
        const response = await service.createUser(req, res)
        return response;
    },
    logIn: async (req, res) => {
        const response = await service.login(req, res);
        return response;
    }
}

