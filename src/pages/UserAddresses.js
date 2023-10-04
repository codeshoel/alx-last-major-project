const UserAddresses = () => {
    return (
        <>
            <div className="page-content pt-2">
                <div className="container">
                <div className="tab-pane">
                        <div className="icon-box icon-box-side icon-box-light mb-4">
                        <span className="icon-box-icon icon-map-marker">
                            <i className="w-icon-map-marker" />
                        </span>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title mb-0 ls-normal">Billing & Shipping <br />Addresses</h4>
                        </div>
                        </div>
                        <p>
                        The following addresses will be used on the checkout page by
                        default.
                        </p>
                        <div className="row mt-4">
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
                                    <td>Username</td>
                                    </tr>
                                    <tr>
                                    <th>Address:</th>
                                    <td>Address</td>
                                    </tr>
                                </tbody>
                                </table>
                            </address>
                            <a
                                href="/#"
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
                                    <td>Username</td>
                                    </tr>
                                    <tr>
                                    <th>Address:</th>
                                    <td>Address</td>
                                    </tr>
                                </tbody>
                                </table>
                            </address>
                            <a
                                href="/#"
                                className="btn btn-link btn-underline btn-icon-right text-primary"
                            >
                                Edit your shipping address
                                <i className="w-icon-long-arrow-right" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserAddresses;