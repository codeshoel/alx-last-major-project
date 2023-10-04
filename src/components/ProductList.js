import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../pages/ProductItem';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {setProducts(data.products)})
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h2>Product Listing</h2>
      {products.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="product-wrapper row cols-lg-5 cols-md-4 cols-sm-3 cols-2">
            {products.map(product => (
              <ProductItem 
                key={product.id}
                product={product}
              />            
            ))}
          </div>
        </>
      )
    
      }
    </>
  );
}

export default ProductList;