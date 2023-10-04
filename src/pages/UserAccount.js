import PageTitle from "../components/PageTitle";

const UserAccount = () => {
    return (
        <>
            <PageTitle title={"My Account"} />
            <div className="page-content pt-2">
                <main className="main">
                <div className="container">
                    <div className="tab tab-vertical row gutter-lg">
                    <ul className="nav nav-tabs mb-6" role="tablist">
                        <li className="nav-item">
                        <a href="#account-dashboard" className="nav-link active">
                            Dashboard
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#account-orders" className="nav-link">
                            Orders
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#account-downloads" className="nav-link">
                            Downloads
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#account-addresses" className="nav-link">
                            Addresses
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#account-details" className="nav-link">
                            Account details
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="wishlist.html" className="nav-link">Wishlist</a>
                        </li>
                        <li className="nav-item">
                        <a href="login.html" className="nav-link">Logout</a>
                        </li>
                    </ul>
                    <div className="tab-content mb-6">
                        <div className="tab-pane active in" id="account-dashboard">
                        <p className="greeting">
                            Hello John Doe
                        </p>
                        <p className="mb-4">
                            From your account dashboard you can view your{" "}
                            <a href="#account-orders" className="text-primary link-to-tab">
                            recent orders
                            </a>
                            , manage your{" "}
                            <a href="#account-addresses" className="text-primary link-to-tab">
                            shipping and billing addresses
                            </a>
                            , and 
                            <a href="#account-details" className="text-primary link-to-tab">
                             edit your password and account details.
                            </a>
                        </p>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="#account-orders" className="link-to-tab">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-orders">
                                    <i className="w-icon-orders" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Orders</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="#account-downloads" className="link-to-tab">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-download">
                                    <i className="w-icon-download" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Downloads</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="#account-addresses" className="link-to-tab">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-address">
                                    <i className="w-icon-map-marker" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Addresses</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="#account-details" className="link-to-tab">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-account">
                                    <i className="w-icon-user" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Account Details</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="wishlist.html" className="link-to-tab">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-wishlist">
                                    <i className="w-icon-heart" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Wishlist</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                            <a href="#">
                                <div className="icon-box text-center">
                                <span className="icon-box-icon icon-logout">
                                    <i className="w-icon-logout" />
                                </span>
                                <div className="icon-box-content">
                                    <p className="text-uppercase mb-0">Logout</p>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane mb-4" id="account-orders">
                        <div className="icon-box icon-box-side icon-box-light">
                            <span className="icon-box-icon icon-orders">
                            <i className="w-icon-orders" />
                            </span>
                            <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize ls-normal mb-0">
                                Orders
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
                                <td className="order-id">#2321</td>
                                <td className="order-date">August 20, 2021</td>
                                <td className="order-status">Processing</td>
                                <td className="order-total">
                                <span className="order-price">$121.00</span> for
                                <span className="order-quantity"> 1</span> item
                                </td>
                                <td className="order-action">
                                <a
                                    href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                                >
                                    View
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-id">#2321</td>
                                <td className="order-date">August 20, 2021</td>
                                <td className="order-status">Processing</td>
                                <td className="order-total">
                                <span className="order-price">$150.00</span> for
                                <span className="order-quantity"> 1</span> item
                                </td>
                                <td className="order-action">
                                <a
                                    href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                                >
                                    View
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-id">#2319</td>
                                <td className="order-date">August 20, 2021</td>
                                <td className="order-status">Processing</td>
                                <td className="order-total">
                                <span className="order-price">$201.00</span> for
                                <span className="order-quantity"> 1</span> item
                                </td>
                                <td className="order-action">
                                <a
                                    href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                                >
                                    View
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-id">#2318</td>
                                <td className="order-date">August 20, 2021</td>
                                <td className="order-status">Processing</td>
                                <td className="order-total">
                                <span className="order-price">$321.00</span> for
                                <span className="order-quantity"> 1</span> item
                                </td>
                                <td className="order-action">
                                <a
                                    href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                                >
                                    View
                                </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <a
                            href="shop-banner-sidebar.html"
                            className="btn btn-dark btn-rounded btn-icon-right"
                        >
                            Go Shop
                            <i className="w-icon-long-arrow-right" />
                        </a>
                        </div>
                        <div className="tab-pane" id="account-downloads">
                        <div className="icon-box icon-box-side icon-box-light">
                            <span className="icon-box-icon icon-downloads mr-2">
                            <i className="w-icon-download" />
                            </span>
                            <div className="icon-box-content">
                            <h4 className="icon-box-title ls-normal">Downloads</h4>
                            </div>
                        </div>
                        <p className="mb-4">No downloads available yet.</p>
                        <a
                            href="shop-banner-sidebar.html"
                            className="btn btn-dark btn-rounded btn-icon-right"
                        >
                            Go Shop
                            <i className="w-icon-long-arrow-right" />
                        </a>
                        </div>
                        <div className="tab-pane" id="account-addresses">
                        <div className="icon-box icon-box-side icon-box-light">
                            <span className="icon-box-icon icon-map-marker">
                            <i className="w-icon-map-marker" />
                            </span>
                            <div className="icon-box-content">
                            <h4 className="icon-box-title mb-0 ls-normal">Addresses</h4>
                            </div>
                        </div>
                        <p>
                            The following addresses will be used on the checkout page by
                            default.
                        </p>
                        <div className="row">
                            <div className="col-sm-6 mb-6">
                            <div className="ecommerce-address billing-address pr-lg-8">
                                <h4 className="title title-underline ls-25 font-weight-bold">
                                Billing Address
                                </h4>
                                <address className="mb-4">
                                <table className="address-table">
                                    <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>John Doe</td>
                                    </tr>
                                    <tr>
                                        <th>Company:</th>
                                        <td>Conia</td>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                        <td>Wall Street</td>
                                    </tr>
                                    <tr>
                                        <th>City:</th>
                                        <td>California</td>
                                    </tr>
                                    <tr>
                                        <th>Country:</th>
                                        <td>United States (US)</td>
                                    </tr>
                                    <tr>
                                        <th>Postcode:</th>
                                        <td>92020</td>
                                    </tr>
                                    <tr>
                                        <th>Phone:</th>
                                        <td>1112223334</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </address>
                                <a
                                href="#"
                                className="btn btn-link btn-underline btn-icon-right text-primary"
                                >
                                Edit your billing address
                                <i className="w-icon-long-arrow-right" />
                                </a>
                            </div>
                            </div>
                            <div className="col-sm-6 mb-6">
                            <div className="ecommerce-address shipping-address pr-lg-8">
                                <h4 className="title title-underline ls-25 font-weight-bold">
                                Shipping Address
                                </h4>
                                <address className="mb-4">
                                <table className="address-table">
                                    <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>John Doe</td>
                                    </tr>
                                    <tr>
                                        <th>Company:</th>
                                        <td>Conia</td>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                        <td>Wall Street</td>
                                    </tr>
                                    <tr>
                                        <th>City:</th>
                                        <td>California</td>
                                    </tr>
                                    <tr>
                                        <th>Country:</th>
                                        <td>United States (US)</td>
                                    </tr>
                                    <tr>
                                        <th>Postcode:</th>
                                        <td>92020</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </address>
                                <a
                                href="#"
                                className="btn btn-link btn-underline btn-icon-right text-primary"
                                >
                                Edit your shipping address
                                <i className="w-icon-long-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="account-details">
                        <div className="icon-box icon-box-side icon-box-light">
                            <span className="icon-box-icon icon-account mr-2">
                            <i className="w-icon-user" />
                            </span>
                            <div className="icon-box-content">
                            <h4 className="icon-box-title mb-0 ls-normal">Account Details</h4>
                            </div>
                        </div>
                        <form className="form account-details-form" action="#" method="post">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label htmlFor="firstname">First name *</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="John"
                                    className="form-control form-control-md"
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <label htmlFor="lastname">Last name *</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Doe"
                                    className="form-control form-control-md"
                                />
                                </div>
                            </div>
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="display-name">Display name *</label>
                            <input
                                type="text"
                                id="display-name"
                                name="display_name"
                                placeholder="John Doe"
                                className="form-control form-control-md mb-0"
                            />
                            <p>
                                This will be how your name will be displayed in the account
                                section and in reviews
                            </p>
                            </div>
                            <div className="form-group mb-6">
                            <label htmlFor="email_1">Email address *</label>
                            <input
                                type="email"
                                id="email_1"
                                name="email_1"
                                className="form-control form-control-md"
                            />
                            </div>
                            <h4 className="title title-password ls-25 font-weight-bold">
                            Password change
                            </h4>
                            <div className="form-group">
                            <label className="text-dark" htmlFor="cur-password">
                                Current Password leave blank to leave unchanged
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-md"
                                id="cur-password"
                                name="cur_password"
                            />
                            </div>
                            <div className="form-group">
                            <label className="text-dark" htmlFor="new-password">
                                New Password leave blank to leave unchanged
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-md"
                                id="new-password"
                                name="new_password"
                            />
                            </div>
                            <div className="form-group mb-10">
                            <label className="text-dark" htmlFor="conf-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-md"
                                id="conf-password"
                                name="conf_password"
                            />
                            </div>
                            <button
                            type="submit"
                            className="btn btn-dark btn-rounded btn-sm mb-4"
                            >
                            Save Changes
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>

        </>
    );
}

export default UserAccount;