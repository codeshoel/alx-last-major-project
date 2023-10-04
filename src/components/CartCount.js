const CartCount = () => {

    let cartProds = JSON.parse(localStorage.getItem("cart")) || [];
    return (
        <>
            <a href="/cart" className="cart-toggle label-down link">
                <i className="w-icon-cart">
                    <span className="cart-count">
                        {cartProds.length}
                    </span>
                </i>
                <span className="cart-label">Cart</span>
            </a>
        </>
    );
}

export default CartCount;