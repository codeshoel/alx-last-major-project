const CartTotal = ({cartProducts}) => {
    let total = 0;
   
    cartProducts.map(product => {
        return total += product.quantity * product.price;
    })
    
    return total;
}

export default CartTotal;