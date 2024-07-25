"use client"

import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

const ProductSlug = () => {
    const params = useParams();
    const { productData } = useSelector(state => state.products)
    const [product, setProduct] = useState(null);


    const filterProductData = useCallback(() => {
        const tempData = productData?.filter((item) => item.category === params.slug)
        setProduct(tempData)
    }, [params, productData])

    useEffect(() => {
        filterProductData()
    }, [filterProductData])

    return (
        <div>
            {product?.length > 0 ? <ProductList products={product} /> : <p style={{
                marginLeft: "25rem",
                flexWrap: "wrap",
                justifyContent: "right",
                padding: "10px",
            }}>No item in this category</p>}
        </div>
    )
}

export default ProductSlug
