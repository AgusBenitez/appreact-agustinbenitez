import React, { useEffect, useState } from 'react'

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then((response) => response.json())
            .then((categories) => setCategories(categories))
    }, [])

    return (
        <h1>Hola desde Categories</h1>
    )
}

export default Categories
