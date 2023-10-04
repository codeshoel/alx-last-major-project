import PageTitle from "../components/PageTitle";
import Logout from "./auth/Logout";

const Dashboard = () => {

    return (
        <>
            <main className="main">
            <PageTitle title={"Dashboard"}/>
            <div className="page-content pt-2">
                <div className="container">
                    <div className="tab tab-vertical row gutter-lg">
                        <div className="tab-content mb-6">
                            <div className="tab-pane active in" id="account-dashboard">
                                <p className="greeting">
                                Hello
                                <span className="text-dark font-weight-bold">{' username'}</span>
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
                                , and &nbsp;
                                <a href="#account-details" className="text-primary link-to-tab">
                                    edit your password and account details.
                                </a>
                                </p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6 mb-4">
                                        <a href="/orders" className="link-to-tab">
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
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6 mb-4">
                                    <a href="/wishlist" className="link-to-tab">
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
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6 mb-4">
                                        <a href="/user/addresses" className="link-to-tab">
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
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6 mb-4">
                                        <a href="/user/account-details" className="link-to-tab">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>

        </>
    );
}

export default Dashboard;