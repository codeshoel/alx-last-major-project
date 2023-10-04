import { useParams } from 'react-router-dom';
import AddToCart from '../utils/AddToCart';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const { id }  = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [prodQuantity, setProdQuantity] = useState(1)



    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const product = await response.json();

                setProduct(product);
                setLoading(false);

            } catch(error) {
                console.log(`Error fetching product ${error}`);
                setLoading(false);
            }
        }
        fetchProductDetails();
    }, [id]);

    if(loading) {
        return <div style={{ alignItems:"center" }}>Loaing...</div>
    }

    if(!product) {
        return <div>Product not found</div>
    }
    const min = 1 //Minimum product quantity
    const max = product.stock //Maximum product quantity
    
    const handleChange = (e) => {
        if(prodQuantity >= min && prodQuantity <= max) {
            const prodQuantity = Number(e.target.value);
            setProdQuantity(prodQuantity);
        }
        
    }

    const incrementProdQuantity = (e) => {
        if(prodQuantity >= min && prodQuantity <= max) {
            setProdQuantity((prodQuantity) => prodQuantity + 1);
        }
    }

    const decrementProdQuantity = (e) => {
        if(prodQuantity >= min + 1 && prodQuantity <= max) {
            setProdQuantity((prodQuantity) => prodQuantity - 1);
        }
    }

    return (
        <>
            <main className="main mb-10 pb-1 mt-5">
                <div className="page-content">
                    <div className="container">
                        <div className="row gutter-lg">
                            <div className="main-content">
                                <div className="product product-single row">
                                <div className="col-md-6 mb-6">
                                    <div className="product-gallery product-gallery-sticky">
                                        <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no">
                                            <figure className="product-image">
                                            <img
                                                src={product.images[0]}
                                                data-zoom-image={product.images[0]}
                                                alt="Electronics Black Wrist Watch"
                                                width={800}
                                                height={900}
                                            />
                                            </figure>
                                        </div>
                                        <div className="product-thumbs-wrap">
                                            <div className="product-thumbs row cols-4 gutter-sm">
                                                {product.images.map(image => 
                                                    <div className="product-thumb active">
                                                        <img
                                                        src={image}
                                                        alt="Product Thumb"
                                                        width={800}
                                                        height={900}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <button className="thumb-up disabled">
                                            <i className="w-icon-angle-left" />
                                            </button>
                                            <button className="thumb-down disabled">
                                            <i className="w-icon-angle-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 mb-md-6">
                                    <div
                                    className="product-details"
                                    data-sticky-options="{'minWidth': 767}"
                                    >
                                    <h2 className="product-title">{product.title}</h2>
                                    <hr className="product-divider" />
                                    <div className="product-price">
                                        <ins className="new-price">${product.price}</ins>
                                    </div>
                                    <div className="product-short-desc">
                                        <p>{product.description}</p>
                                    </div>
                                    <hr className="product-divider" />
                                    <div className="product-variation-price">
                                        <span />
                                    </div>
                                    <div className="fix-bottom product-sticky-content sticky-content">
                                        <div className="product-form container">
                                            <div className="product-qty-form">
                                                <div className="input-group">
                                                <input
                                                    className="quantity form-control"
                                                    type="number"
                                                    value={prodQuantity}
                                                    onChange={handleChange}
                                                />
                                                <button onClick={incrementProdQuantity} className="quantity-plus w-icon-plus" />
                                                <button onClick={decrementProdQuantity} className="quantity-minus w-icon-minus" />
                                                </div>
                                            </div>
                                            <button onClick={() => AddToCart(product, prodQuantity)} className="btn btn-primary btn-cart">
                                                <i className="w-icon-cart" />
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                                <div className="sidebar-overlay" />
                                <a className="sidebar-close" href="#">
                                <i className="close-icon" />
                                </a>
                                <a href="#" className="sidebar-toggle d-flex d-lg-none">
                                <i className="fas fa-chevron-left" />
                                </a>
                                <div className="sidebar-content scrollable">
                                <div className="sticky-sidebar">
                                    <div className="widget widget-icon-box mb-6">
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                        <i className="w-icon-truck" />
                                        </span>
                                        <div className="icon-box-content">
                                        <h4 className="icon-box-title">
                                            Free Shipping &amp; Returns
                                        </h4>
                                        <p>For all orders over $99</p>
                                        </div>
                                    </div>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                        <i className="w-icon-bag" />
                                        </span>
                                        <div className="icon-box-content">
                                        <h4 className="icon-box-title">Secure Payment</h4>
                                        <p>We ensure secure payment</p>
                                        </div>
                                    </div>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                        <i className="w-icon-money" />
                                        </span>
                                        <div className="icon-box-content">
                                        <h4 className="icon-box-title">Money Back Guarantee</h4>
                                        <p>Any back within 30 days</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="row gutter-md">
                        <a
                            href="/"
                            className="btn btn-secondary btn-rounded btn-icon-left btn-shopping mr-auto"
                            >
                            <i className="w-icon-long-arrow-left" />
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductDetail;