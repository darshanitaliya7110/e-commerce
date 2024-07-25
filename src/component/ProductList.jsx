import { addCart } from '@/actions/cartAction';
import React from 'react'
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    const dispatch = useDispatch()

    const handleAddCart = (product) => {
        dispatch(addCart(product))
    }

    return (
        <div
            style={{
                marginLeft: "10rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                {products?.map((product) => {
                    return (
                        <ProductItem key={product.id} product={product} handleAddCart={handleAddCart} />
                    );
                })}
            </div>
        </div>
    )
}

export default ProductList
