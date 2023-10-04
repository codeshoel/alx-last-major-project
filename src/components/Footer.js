import paymentImg from '../assets/images/payment.png';
import logoImg from '../assets/images/logo_footer.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget widget-about">
                            <a href="demo1.html" className="logo-footer">
                                <img
                                src={logoImg}
                                alt="logo-footer"
                                width={144}
                                height={45}
                                />
                            </a>
                            <div className="widget-body">
                                <p className="widget-about-title">Got Question? Call us 24/7</p>
                                <a href="tel:18005707777" className="widget-about-call">
                                (237)672-076-995
                                </a>
                                <div className="social-icons social-icons-colored">
                                <a
                                    href="#"
                                    className="social-icon social-facebook w-icon-facebook"
                                />
                                <a
                                    href="#"
                                    className="social-icon social-twitter w-icon-twitter"
                                />
                                <a
                                    href="#"
                                    className="social-icon social-instagram w-icon-instagram"
                                />
                                <a
                                    href="#"
                                    className="social-icon social-youtube w-icon-youtube"
                                />
                                <a
                                    href="#"
                                    className="social-icon social-pinterest w-icon-pinterest"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                            <h3 className="widget-title">Company</h3>
                            <ul className="widget-body">
                                <li>
                                <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                <a href="#">Team Member</a>
                                </li>
                                <li>
                                <a href="#">Career</a>
                                </li>
                                <li>
                                <a href="contact-us.html">Contact Us</a>
                                </li>
                                <li>
                                <a href="#">Affilate</a>
                                </li>
                                <li>
                                <a href="#">Order History</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                            <h4 className="widget-title">My Account</h4>
                            <ul className="widget-body">
                                <li>
                                <a href="#">Track My Order</a>
                                </li>
                                <li>
                                <a href="cart.html">View Cart</a>
                                </li>
                                <li>
                                <a href="login.html">Sign In</a>
                                </li>
                                <li>
                                <a href="#">Help</a>
                                </li>
                                <li>
                                <a href="wishlist.html">My Wishlist</a>
                                </li>
                                <li>
                                <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                            <h4 className="widget-title">Customer Service</h4>
                            <ul className="widget-body">
                                <li>
                                <a href="#">Payment Methods</a>
                                </li>
                                <li>
                                <a href="#">Money-back guarantee!</a>
                                </li>
                                <li>
                                <a href="#">Product Returns</a>
                                </li>
                                <li>
                                <a href="#">Support Center</a>
                                </li>
                                <li>
                                <a href="#">Shipping</a>
                                </li>
                                <li>
                                <a href="#">Term and Conditions</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-left">
                        <p className="copyright">
                            Copyright © 2023 Shoprite Store. All Rights Reserved.
                        </p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;