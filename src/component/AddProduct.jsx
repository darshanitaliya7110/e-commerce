"use client"

import { deleteProduct, setProductData } from '@/actions/productAction';
import { db } from '@/app/firebase';
import { categories } from '@/data';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import AdminProductList from './AdminProductList';


const AddProduct = () => {

    const dispatch = useDispatch();
    const { productData } = useSelector(state => state.products)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [id, setId] = useState(null)


    const handleEdit = (id) => {
        const itemToEdit = productData.find((item) => item.id === id)

        setId(id)
        setName(itemToEdit.name)
        setDescription(itemToEdit.description)
        setCategory(itemToEdit.category)
        setPrice(itemToEdit.price)
    }

    const getProductDataFirestore = useCallback(async () => {

        try {
            const querySnapshot = await getDocs(collection(db, 'products'))
            const documents = []
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() })
            })
            dispatch(setProductData(documents))
        } catch (error) {
            console.error('Error getting documents: ', error)
            throw error
        }

    }, [dispatch])

    useEffect(() => {
        getProductDataFirestore()
    }, [dispatch, getProductDataFirestore]);




    const clearForm = () => {
        setName('')
        setDescription("")
        setCategory("")
        setPrice("")
        setId(null)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            const id = uniqid();
            const newProduct = { id, name, description, category, price, price: Number(price) };

            try {
                await setDoc(doc(db, "products", id), newProduct);
                dispatch(setProductData([...productData, newProduct]))
            } catch (error) {
                console.error("Error adding product: ", error);
            }
        }
        else {
            const productRef = doc(db, "products", id);
            await updateDoc(productRef, { id, name, description, category, price, price: Number(price) });
            const temp = productData.filter(item => item.id !== id)
            dispatch(setProductData([...temp, { id, name, description, category, price, price: Number(price) }]))
        }

        e.target.reset();
        clearForm()
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this entry?')) {

            await deleteDoc(doc(db, 'products', id))
            dispatch(deleteProduct({ id }))
        }
    }

    return (
        <>
            <form style={{
                marginLeft: "20rem",
                padding: "20px",
            }} onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Description : </label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Category : </label>
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
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
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <button type="button" >Cancel</button>
                    <button type="submit" style={{ marginLeft: '10px' }}>Save</button>
                </div>
            </form>

            <AdminProductList handleEdit={handleEdit} handleDelete={handleDelete} />
        </>


    )
}

export default AddProduct
