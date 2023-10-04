import React, { useState } from 'react';
import SearchInput from './SearchInput';


const ProductSearch = ({products}) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        const results = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

  return (
    <div>
        <SearchInput onSearch={handleSearch} />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default ProductSearch;