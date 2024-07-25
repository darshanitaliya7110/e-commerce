"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import CartList from './CartList'

const Cart = () => {
    const { cartData } = useSelector((state) => state.cart);
    return (
        <div>
            <CartList products={cartData} />
        </div>
    )
}

export default Cart
