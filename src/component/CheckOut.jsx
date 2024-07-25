"use client"

import { clearCart } from '@/actions/cartAction';
import { db } from '@/app/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

const CheckOut = () => {

    const router = useRouter()
    const { cartData } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: ''
    });
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addOrderDataFirestore = useCallback(async (data) => {

        try {
            await setDoc(doc(db, 'orders', data.id), data)
        } catch (error) {
            console.log('Error adding order', error)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here


        if (formData.name.trim().length === 0) {
            setError('Enter valid name')
            return
        }

        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regEmail.test(formData.email)) {
            setError('Enter valid email')
            return
        }

        if (!formData.zipCode.trim().length === 6) {
            setError('Enter valid zip code')
            return
        }

        if (cartData.length === 0) {
            router.push('/product')
            e.target.reset();
        }

        const id = uniqid()
        const data = { ...formData, id, cartData, orderStatus: false }
        addOrderDataFirestore(data)
        dispatch(clearCart())
        e.target.reset();

        router.push("/cart/checkout/thankyou")
    };

    const handleReturnToCart = () => {
        router.push('/cart');
    };

    return (
        <form style={{
            marginLeft: "20rem",
            padding: "20px",
        }} onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>Email : </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>Address : </label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>City : </label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>Zip/Postal Code : </label>
                <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>Country : </label>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                <button type="button" onClick={handleReturnToCart}>Return to Cart</button>
                <button type="submit" style={{ marginLeft: '10px' }}>Place Order</button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

    )
}

export default CheckOut
