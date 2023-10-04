import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {

    const { id } = useParams();
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then((response) => response.json())
        .then((data) => {setCategories(data)})
        .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            {categories.map(category => (
                <option value={category} >{category}</option>
            ))}
            
        </>
    );
}

export default Categories;