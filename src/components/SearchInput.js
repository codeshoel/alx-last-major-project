import React from 'react';
import { useState } from 'react';
import Categories from './Categories';



const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

  return (
    <>
        <form
            method="get"
            className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
        >
            <div className="select-box">
            <select id="category" name="category">
                <option value="">All Categories</option>
                <Categories />
            </select>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Search in..."
                value={query}
                onChange={handleInputChange}
            />
            <button className="btn btn-search" type="submit">
            <i className="w-icon-search" />
            </button>
        </form>
    </>
  )
}

export default SearchInput;