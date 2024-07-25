"use client"

import { db } from '@/app/firebase';
import { setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import uniqid from 'uniqid';

const categories = ["Watersports", "Soccer", "Chess", "Running"];

const AddProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const addProductDataFirestore = useCallback(async (data) => {
    //     try {
    //         await setDoc(doc(db, 'orders', data.id), data)
    //     } catch (error) {
    //         console.log('Error adding order', error)
    //     }
    // }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = uniqid();

        const newProduct = { id, ...formData, price: Number(formData.price) };

        try {
            await setDoc(doc(db, "products", "allProduct"), newProduct);
        } catch (error) {
            console.error("Error adding product: ", error);
        }
    }

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
                <label>Description : </label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <div>
                <label>Category : </label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <br />
            <div>
                <label>Price : </label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <button type="button" >Cancel</button>
                <button type="submit" style={{ marginLeft: '10px' }}>Save</button>
            </div>
        </form>
    )
}

export default AddProduct
