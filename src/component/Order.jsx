"use client"

import { deleteOrderData, setOrderData, updateStatus } from '@/actions/orderAction'
import { db } from '@/app/firebase'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Order = () => {

    const dispatch = useDispatch()
    const { orderData } = useSelector(state => state.orders)


    const getOrderDateFirestore = useCallback(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'orders'))
            const documents = []
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() })
            })
            dispatch(setOrderData(documents))
        } catch (error) {
            console.error('Error getting documents: ', error)
            throw error
        }
    }, [dispatch])


    useEffect(() => {
        getOrderDateFirestore()
    }, [getOrderDateFirestore])

    const handleUpdateStatus = async (item) => {
        const orderRef = doc(db, "orders", item.id);
        await updateDoc(orderRef, { ...item, orderStatus: true });
        dispatch(updateStatus({ id: item.id, status: true }))
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this entry?')) {

            await deleteDoc(doc(db, 'orders', id))
            dispatch(deleteOrderData({ id }))
        }
    }

    return (
        <div style={{
            marginLeft: "20rem",
            padding: "20px",
        }}>
            <h1>Admin</h1>
            <>
                <hr />

                {orderData.length > 0 ? <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: '20px',
                    }}
                >
                    <thead>

                        <tr>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Name
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Email
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Total
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Shipped
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {orderData.length > 0 && orderData.map((item, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.name}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.email}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.cartData.reduce((sum, i) => sum = sum + i.price * i.quantity, 0)}
                                </td>


                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <button onClick={() => handleUpdateStatus(item)}>{item.orderStatus ? "Shipped" : "Pending"}</button>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table > : <p>No any order</p>}
            </>





        </div>
    )
}

export default Order;
