import NotifyWarning from "../utils/notifications/NotifyWarning";

const CartNav = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <>
            <nav className="breadcrumb-nav">
                <div className="container">
                <ul className="breadcrumb shop-breadcrumb bb-no">
                    <li className="active">
                    <a href="/cart">Shopping Cart</a>
                    </li>
                    {cart.length > 0 ? (
                        <>
                            <li className="active">
                                <a href="/checkout">Checkout</a>
                            </li>
                            <li>
                                <a href="/order-completed">Order Complete</a>
                            </li>
                        </>
                    ): (
                        <NotifyWarning message="Cart is Empty" />
                    )}
                </ul>
                </div>
            </nav>
        </>
    );
}

export default CartNav;