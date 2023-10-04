/* eslint-disable jsx-a11y/anchor-has-content */
import logoImg from '../assets/images/logo_footer.png';
import CartCount from './CartCount';
import Categories from './Categories';
import SearchInput from './SearchInput';

const HeaderMiddle = () => {
    
    return (
       <>
            <div className="header-middle">
                <div className="container">
                    <div className="header-left mr-md-4">
                    <a href="/" className="mobile-menu-toggle  w-icon-hamburger"></a>
                    <a href="/" className="logo ml-lg-0">
                        <img src={logoImg} alt="logo" width={144} height={45} />
                    </a>
                    <SearchInput />
                    </div>
                    <div className="header-right ml-4">
                    <div className="header-call d-xs-show d-lg-flex align-items-center">
                        <a href="/" className="w-icon-call"></a>
                        <div className="call-info d-lg-show">
                            <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                                <a href="mailto:#" className="text-capitalize">
                                Live Chat
                                </a>
                            </h4>
                            <a href="tel:#" className="phone-number font-weight-bolder ls-50">
                            (237)672-076-995
                            </a>
                        </div>
                    </div>
                    <a className="wishlist label-down link d-xs-show" href="wishlist.html">
                        <i className="w-icon-heart" />
                        <span className="wishlist-label d-lg-show">Wishlist</span>
                    </a>
                    <a className="compare label-down link d-xs-show" href="compare.html">
                        <i className="w-icon-compare" />
                        <span className="compare-label d-lg-show">Compare</span>
                    </a>
                    <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                        <div className="cart-overlay" />
                        <CartCount />
                        <div className="dropdown-box">
                        <div className="cart-header">
                            <span>Shopping Cart</span>
                            <a href="/" className="btn-close">
                            Close
                            <i className="w-icon-long-arrow-right" />
                            </a>
                        </div>
                        <div className="products">
                            <div className="product product-cart">
                            <div className="product-detail">
                                <a href="product-default.html" className="product-name">
                                Beige knitted elas
                                <br />
                                tic runner shoes
                                </a>
                                <div className="price-box">
                                <span className="product-quantity">1</span>
                                <span className="product-price">$25.68</span>
                                </div>
                            </div>
                            <figure className="product-media">
                                <a href="product-default.html">
                                <img
                                    src="assets/images/cart/product-1.jpg"
                                    alt="product"
                                    height={84}
                                    width={94}
                                />
                                </a>
                            </figure>
                            <button className="btn btn-link btn-close">
                                <i className="fas fa-times" />
                            </button>
                            </div>
                            <div className="product product-cart">
                            <div className="product-detail">
                                <a href="product-default.html" className="product-name">
                                Blue utility pina
                                <br />
                                fore denim dress
                                </a>
                                <div className="price-box">
                                <span className="product-quantity">1</span>
                                <span className="product-price">$32.99</span>
                                </div>
                            </div>
                            <figure className="product-media">
                                <a href="product-default.html">
                                <img
                                    src="assets/images/cart/product-2.jpg"
                                    alt="product"
                                    width={84}
                                    height={94}
                                />
                                </a>
                            </figure>
                            <button className="btn btn-link btn-close">
                                <i className="fas fa-times" />
                            </button>
                            </div>
                        </div>
                        <div className="cart-total">
                            <label>Subtotal:</label>
                            <span className="price">$58.67</span>
                        </div>
                        <div className="cart-action">
                            <a
                            href="cart.html"
                            className="btn btn-dark btn-outline btn-rounded"
                            >
                            View Cart
                            </a>
                            <a href="checkout.html" className="btn btn-primary  btn-rounded">
                            Checkout
                            </a>
                        </div>
                        </div>
                        {/* End of Dropdown Box */}
                    </div>
                    </div>
                </div>
            </div>
       </>
    );
}

export default HeaderMiddle;