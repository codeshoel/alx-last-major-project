import { useState } from 'react';
import NotifySuccess from '../utils/notifications/NotifySuccess';
import CartTotal from './CartTotal';

const CartItems = () => {
    
    let cartProds = JSON.parse(localStorage.getItem("cart")) || [];
    const [cartProducts, setCartProducts] = useState(cartProds);

    const incrementProdQuantity = (productId, stock) => {
        const updatedCart = cartProducts.map(product => {
            if (product.id === productId && product.stock <= stock) {
                return {...product, quantity: product.quantity + 1};
            }
            return product;
        });
        
        setCartProducts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        NotifySuccess("Cart updated");
    }

    const decrementProdQuantity = (productId, stock) => {
        const updatedCart = cartProducts.map(product => {
            if (product.id === productId && product.quantity > 1) {
                return {...product, quantity: product.quantity - 1};
            }
            return product;
        });

        setCartProducts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        NotifySuccess("Cart updated");
    }

    const removeCartItem = (product) => {
        const action = window.confirm(`Do you really want to remove ${product.title} from cart ?`);
        if(action) {
            const index = cartProds.findIndex(prod => prod.id === product.id);
            cartProds = [
                ...cartProds.slice(0, index),
                ...cartProds.slice(index + 1)  
            ];

            setCartProducts(cartProds);

            localStorage.setItem("cart", JSON.stringify(cartProds));
            NotifySuccess(`${product.title} removed from cart.`);

        }
    }

    const clearCart = () => {
        const action = window.confirm("Are your sure you want to clear the Cart? All products will be removed.");
        if(action) {
            localStorage.removeItem("cart");
            NotifySuccess("Cart cleared successfully");
        }
    }
    return (
        <>
            <div className="col-lg-8 pr-lg-4 mb-6">
                <table className="shop-table cart-table">
                    {cartProducts.length > 0 ? (
                            <thead>
                            <tr>
                                <th className="product-name">
                                <span>Product</span>
                                </th>
                                <th />
                                <th className="product-price">
                                <span>Price</span>
                                </th>
                                <th className="product-quantity">
                                <span>Quantity</span>
                                </th>
                                <th className="product-subtotal">
                                <span>Subtotal</span>
                                </th>
                            </tr>
                        </thead>
                    )
                        : (
                            <tr></tr>
                        )}
                    <tbody>
                        {cartProducts.length === 0 ? (
                            <h2 style={{ fontSize:'20px', textAlign:'center', padding:'30px 0', border:'1px solid #ccc' }}>Cart empty</h2>
                        ) : (
                            cartProducts.map(product =>
                            <tr>
                                <td className="product-thumbnail">
                                    <div className="p-relative">
                                        <a href="product-default.html">
                                        <figure>
                                            <img
                                            src={product.image}
                                            alt="product"
                                            width={300}
                                            height={338}
                                            />
                                        </figure>
                                        </a>
                                        <button onClick={() => removeCartItem(product)} className="btn btn-close">
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </td>
                                <td className="product-name">
                                    <a href="product-default.html">{product.title}</a>
                                </td>
                                <td className="product-price">
                                    <span className="amount">${product.price}</span>
                                </td>
                                <td className="product-quantity">
                                    <div className="input-group">
                                        <input
                                            className="quantity form-control"
                                            type="number"
                                            key={product.id}
                                            value={product.quantity}
                                        />
                                        <button 
                                            className="quantity-plus w-icon-plus" 
                                            onClick={() => incrementProdQuantity(product.id, product.stock)}
                                        />
                                        <button 
                                            className="quantity-minus w-icon-minus" 
                                            onClick={() => decrementProdQuantity(product.id, product.stock)}
                                        />
                                    </div>
                                </td>
                                <td className="product-subtotal">
                                <span className="amount">${product.quantity * product.price}</span>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                <div className="cart-action mb-6">
                    <a
                        href="/"
                        className="btn btn-secondary btn-rounded btn-icon-left btn-shopping mr-auto"
                    >
                        <i className="w-icon-long-arrow-left" />
                        Continue Shopping
                    </a>
                    <button
                        type="submit"
                        className="btn btn-rounded btn-default btn-clear"
                        value="Clear Cart"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
            <div className="col-lg-4 sticky-sidebar-wrapper">
                <div className="sticky-sidebar">
                    <div className="cart-summary mb-4">
                    <h1 className="text-uppercase text-center">$<CartTotal cartProducts={cartProducts} /></h1>
                    <hr className="divider mb-6" />
                    <a
                        href="/checkout"
                        className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"
                    >
                        Proceed to checkout
                        <i className="w-icon-long-arrow-right" />
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItems;