import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ProductItem = ({product}) => {
    return (
        <>
            <div className="product-wrap">
            <div className="product text-center">
                <Link to={`/products/detail/${product.id}`}>
                    <figure className="product-media">
                        <img
                            src={product.images[0]}
                            alt="Product"
                            width={300}
                            height={338}
                        />
                        <div className="product-action-horizontal">
                            <a
                                href="/"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                            />
                            <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"
                            />
                            <a
                            href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"
                            />
                            <a href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"
                            />
                        </div>
                    </figure>
                </Link>
                <div className="product-details">
                <div className="product-cat">
                    <a href="/">{product.category}</a>
                </div>
                <h3 className="product-name">
                    <a href="product-default.html">{product.title}</a>
                </h3>
                <div className="product-pa-wrapper">
                    <div className="product-price">
                    <ins className="new-price">${product.price}</ins>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ProductItem;