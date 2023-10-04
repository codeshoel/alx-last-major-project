import CartTotal from "./CartTotal";

const OrderSummary = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <>
            <tbody>
                {cartItems.map(product => (
                    <tr className="bb-no">
                    <td className="product-name">
                        {product.title} <i className="fas fa-times" />{"  "}
                        <span className="product-quantity">{product.quantity}</span>
                    </td>
                        <td className="product-total">${product.quantity * product.price}</td>
                    </tr>
                ))}
                <tr className="cart-subtotal bb-no">
                <td>
                    <b>Subtotal</b>
                </td>
                <td>
                    <b>$<CartTotal cartProducts={cartItems}/></b>
                </td>
                </tr>
            </tbody>
        </>
    );
}

export default OrderSummary;