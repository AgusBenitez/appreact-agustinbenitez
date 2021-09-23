import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data));
        console.log(categories)
    }, [])

    return (
        <ul className="categories">
            <li><Link>Samsung</Link></li>
            <li><Link>Motorola</Link></li>
            <li><Link>Apple</Link></li>
        </ul>
    )
}

export default Categories
