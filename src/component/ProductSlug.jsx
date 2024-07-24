"use client"

import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const ProductSlug = () => {
    const params = useParams();
    const { productData } = useSelector(state => state.products)
    const [product, setProduct] = useState(null);

    const filterProductData = useCallback(() => {
        const tempData = productData.products?.filter((item) => item.category === params.slug)
        setProduct(tempData)
    }, [params, productData])

    useEffect(() => {
        filterProductData()
    }, [filterProductData])

    return (
        <div>
            <Navbar />
            <Sidebar categories={productData.categories} />
            <ProductList products={product} />
        </div>
    )
}

export default ProductSlug
