import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from "../components/OrderSummary";
import CartNav from "../components/CartNav";
import NotifySuccess from '../utils/notifications/NotifySuccess';

const CheckOut = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const [orderStatusMsg, setOrderStatusMsg] = useState('Place Order');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderStatusMsg('Placing Order...');
        setTimeout(() => {
            setOrderStatusMsg('Order Sent');
            NotifySuccess('Thank you for placing an order')
            navigate('/order-completed')
        }, 5000);
        
    }

    
    return (
        <>
            <main className="main checkout">
                <CartNav />
                <div className="page-content">
                    <div className="container">                   
                    <form 
                        className="form checkout-form" 
                        method="post"
                        onSubmit={handleSubmit}
                    >
                        <div className="row mb-9">
                        <div className="col-lg-7 pr-lg-4 mb-4">
                            <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                            Billing Details
                            </h3>
                            <div className="row gutter-sm">
                            <div className="col-xs-6">
                                <div className="form-group">
                                <label>First name *</label>
                                <input
                                    type="text"
                                    className="form-control form-control-md"
                                    name="firstname"
                                    value="Kum Jude"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                <label>Last name *</label>
                                <input
                                    type="text"
                                    className="form-control form-control-md"
                                    name="lastname"
                                    required=""
                                />
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Country *</label>
                            <div className="select-box">
                                <select name="country" className="form-control form-control-md">
                                <option value="default" selected="selected">
                                    Cameroon
                                </option>
                                </select>
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Street address *</label>
                            <input
                                type="text"
                                placeholder="House number and street name"
                                className="form-control form-control-md mb-2"
                                name="street-address-1"
                                required=""
                            />
                            <input
                                type="text"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                className="form-control form-control-md"
                                name="street-address-2"
                                required=""
                            />
                            </div>
                            <div className="row gutter-sm">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label>Town / City *</label>
                                <input
                                    type="text"
                                    className="form-control form-control-md"
                                    name="town"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <label>State/Region *</label>
                                <div className="select-box">
                                    <select
                                    name="country"
                                    className="form-control form-control-md"
                                    >
                                    <option value="default" selected="selected">
                                        Centre
                                    </option>
                                    <option value="uk">Adamawa</option>
                                    <option value="uk">Centre</option>
                                    <option value="uk">Littoral</option>
                                    <option value="uk">North West</option>
                                    <option value="uk">South West</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-group">
                                <label>Phone *</label>
                                <input
                                    type="text"
                                    className="form-control form-control-md"
                                    name="phone"
                                    required=""
                                />
                                </div>
                            </div>
                            </div>
                            <div className="form-group mb-7">
                            <label>Email address *</label>
                            <input
                                type="email"
                                className="form-control form-control-md"
                                name="email"
                                value="kumjude@gmail.com"
                                required=""
                            />
                            </div>                         
                            <div className="form-group mt-3">
                            <label htmlFor="order-notes">Order notes (optional)</label>
                            <textarea
                                className="form-control mb-0"
                                id="order-notes"
                                name="order-notes"
                                cols={30}
                                rows={4}
                                placeholder="Notes about your order, e.g special notes for delivery"
                                defaultValue={""}
                            />
                            </div>
                        </div>
                        <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                            <div className="order-summary-wrapper sticky-sidebar">
                                <h3 className="title text-uppercase ls-10">Your Order</h3>
                                <div className="order-summary">
                                    <table className="order-table">
                                    <thead>
                                        <tr>
                                        <th colSpan={2}>
                                            <b>Product</b>
                                        </th>
                                        </tr>
                                    </thead>
                                    <OrderSummary />
                                    </table>
                                    <div className="payment-methods" id="payment_method">
                                    <h4 className="title font-weight-bold ls-25 pb-0 mb-1">
                                        Payment Methods
                                    </h4>
                                    <div className="accordion payment-accordion">
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#cash-on-delivery" className="collapse">
                                                Direct Bank Transfer
                                                </a>
                                            </div>
                                            <div id="cash-on-delivery" className="card-body expanded">
                                                <p className="mb-0">
                                                Make your payment directly into our bank account.
                                                Please use your Order ID as the payment reference.
                                                Your order will not be shipped until the funds have
                                                cleared in our account.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#payment" className="expand">
                                                Check Payments
                                                </a>
                                            </div>
                                            <div id="payment" className="card-body collapsed">
                                                <p className="mb-0">
                                                Please send a check to Store Name, Store Street, Store
                                                Town, Store State / County, Store Postcode.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#delivery" className="expand">
                                                Cash on delivery
                                                </a>
                                            </div>
                                            <div id="delivery" className="card-body collapsed">
                                                <p className="mb-0">Pay with cash upon delivery.</p>
                                            </div>
                                        </div>
                                        <div className="card p-relative">
                                            <div className="card-header">
                                                <a href="#paypal" className="expand">
                                                Paypal
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group place-order pt-6">
                                        <button
                                            type="submit"
                                            className="btn btn-dark btn-block btn-rounded"
                                        >
                                            {orderStatusMsg}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </main>

        </>

    );
}

export default CheckOut;