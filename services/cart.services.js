const Cart = require('../models/cart.model');
const { StatusCodes } = require('http-status-codes');
const Product = require('../models/product.model');

module.exports={
    addItem: async (req, res) => {
        const user_id = req.user.user_id;
        const {id: product_id} = req.params;
        try{
            const product = await Product.findOne({_id: product_id})
            var images = product.images
            var [firstImage, secondImage, thirdImage, fourthImage] = [...images.values()]
            if(!product){
                return res.status(StatusCodes.NOT_FOUND).json({data: `Product does not exist.`})
            }
            if(product.stock == 0){
                return res.status(StatusCodes.NOT_FOUND).json({data: `We're out of stock on this one.`})
            }
            const checkCartItems = await Cart.findOne({product_id: product_id})
            if(checkCartItems){
                return res.status(StatusCodes.BAD_REQUEST).json({data: `Item is already in the cart.`})
            }
            try{
                const cart = await Cart.create({
                    user_id: user_id,
                    product_id: product._id,
                    name: product.name,
                    price: product.price,
                    image: firstImage 
                })
                return res.status(StatusCodes.CREATED).json({data: `${cart.name} has been added to the cart.`, status: StatusCodes.CREATED})
            }catch(error){
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
            }

        }catch(error){
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
        }
    },
    fetchItems: async (req, res) => {
        const user_id = req.user.user_id;
        try{
            const cart = await Cart.find({user_id: user_id})
            if(cart.length == 0){
                return res.status(StatusCodes.NOT_FOUND).json({data: `You're yet to add items to your cart.`})
            }
            let totalItemCost=0;
            for(index in cart){
                totalItemCost += cart[index].price
            }
            return res.status(StatusCodes.OK).json({cart: cart, total: totalItemCost})
        }catch(error){
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

        }
    },
    updateItem: async (req, res) => {
        const { id: cartItemId, qty: qty } = req.params
        // console.log(req.params)
        const user_id = req.user.user_id;
        try{
            const cartItem = await Cart.findOne({_id: cartItemId, user_id: user_id})
            if(!cartItem){

            }
            let _qty = cartItem.qty+parseInt(qty);
            let _price = cartItem.price*_qty;
            const cart = await Cart.findOneAndUpdate({_id: cartItem._id, user_id: user_id}, {price: _price, qty: _qty}, {new: true, runValidators: true})
            return res.status(StatusCodes.OK).json({data: cart, status: StatusCodes.OK})
        }catch(error){
            console.log(error)
        }
    },
    deleteItem: async (req, res) => {
        const {id: cartItemId} = req.params
        const user_id = req.user.user_id;
        try{
            const cart = await Cart.findOneAndDelete({_id: cartItemId, user_id: user_id})
            if(!cart){
                return res.status(StatusCodes.NOT_FOUND).json({data: `Item may have been deleted or removed.`})
            }
            return res.status(StatusCodes.OK).json({data: `Item removed successfully.`})
        }catch(error){
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
        }
    },
    checkoutItem: async (req, res) => {
        // const 
    },
}



