"use client"

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import ProductList from './ProductList'
import CartList from './CartList'

const Cart = () => {
    const { productData } = useSelector((state) => state.products);
    const { cartData } = useSelector((state) => state.cart);
    return (
        <div>
            <Navbar />
            <Sidebar categories={productData.categories} />
            <CartList products={cartData} />
        </div>
    )
}

export default Cart
