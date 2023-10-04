import CartNav from "../components/CartNav";
import CartTotal from "../components/CartTotal";
import OrderSummary from "../components/OrderSummary";

const OrderCompleted = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    return (
        <>
            <main className="main order">
                <CartNav />
                <div className="page-content mb-10 pb-2">
                    <div className="container">
                    <div 
                        className="order-success text-center font-weight-bolder" 
                        style={{ 
                                backgroundColor:'#ace8ca', 
                                color:'#224533', 
                                borderRadius:'5px' 
                            }}
                    >
                        <i className="fa fa-check" />
                        Thank you. Your order has been received.
                    </div>
                    <ul className="order-view list-style-none">
                        <li>
                        <label>Order ID</label>
                        <strong>#SHP0001</strong>
                        </li>
                        <li>
                        <label>Status</label>
                        <strong>On hold</strong>
                        </li>
                        <li>
                        <label>Date</label>
                        <strong>October 4, 2023</strong>
                        </li>
                        <li>
                        <label>Total</label>
                        <strong>$<CartTotal cartProducts={cartItems} /></strong>
                        </li>
                        <li>
                        <label>Payment Method</label>
                        <strong>Direct Bank Transfer</strong>
                        </li>
                    </ul>
                    {/* End of Order View */}
                    <div className="order-details-wrapper mb-5">
                        <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
                        <table className="order-table">
                        <thead>
                            <tr>
                            <th className="text-dark">Product</th>
                            <th />
                            </tr>
                        </thead>
                        <OrderSummary />
                        <tfoot>
                            <tr>
                            <th>Shipping:</th>
                            <td>Flat rate</td>
                            </tr>
                            <tr>
                            <th>Payment method:</th>
                            <td>Direct Bank Transfer</td>
                            </tr>
                            <tr className="total">
                            <th className="border-no">Total:</th>
                            <td className="border-no">$<CartTotal cartProducts={cartItems} /></td>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                    <div id="account-addresses">
                        <div className="row">
                        <div className="col-sm-6 mb-8">
                            <div className="ecommerce-address billing-address">
                            <h4 className="title title-underline ls-25 font-weight-bold">
                                Billing Address
                            </h4>
                            <address className="mb-4">
                                <table className="address-table">
                                <tbody>
                                    <tr>
                                        <td>Billing Info here</td>
                                    </tr>
                                </tbody>
                                </table>
                            </address>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-8">
                            <div className="ecommerce-address shipping-address">
                            <h4 className="title title-underline ls-25 font-weight-bold">
                                Shipping Address
                            </h4>
                            <address className="mb-4">
                                <table className="address-table">
                                <tbody>
                                    <tr>
                                        <td>Delivery Info Here</td>
                                    </tr>
                                </tbody>
                                </table>
                            </address>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a
                        href="/cart"
                        className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6"
                    >
                        <i className="w-icon-long-arrow-left" />
                        Go to Cart
                    </a>
                    </div>
                </div>
            </main>

        </>
    );
}

export default OrderCompleted;