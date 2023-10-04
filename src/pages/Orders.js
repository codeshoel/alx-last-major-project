import CartTotal from "../components/CartTotal";

const Orders = () => {

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <>
            <div className="page-content pt-2">
                <div className="container">
                    <div className="tab-pane mb-4">
                            <div className="icon-box icon-box-side icon-box-light mb-4">
                            <span className="icon-box-icon icon-orders">
                                <i className="w-icon-orders" />
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-capitalize ls-normal mb-0">
                                    User's <br />Orders
                                </h4>
                            </div>
                            </div>
                            <table className="shop-table account-orders-table mb-6">
                            <thead>
                                <tr>
                                <th className="order-id">Order</th>
                                <th className="order-date">Date</th>
                                <th className="order-status">Status</th>
                                <th className="order-total">Total</th>
                                <th className="order-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="order-id">#SHP0001</td>
                                <td className="order-date">October 4, 2023</td>
                                <td className="order-status">Processing</td>
                                <td className="order-total">
                                    <span className="order-price">$<CartTotal cartProducts={cartItems} /></span>
                                </td>
                                <td className="order-action">
                                    <a
                                    href="/#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                                    >
                                    View
                                    </a>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <a
                            href="/"
                            className="btn btn-secondary btn-rounded btn-icon-right"
                            >
                            Go Shop
                            <i className="w-icon-long-arrow-right" />
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;