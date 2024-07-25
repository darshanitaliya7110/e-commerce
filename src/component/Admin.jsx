"use client"

import { setOrderData } from '@/actions/orderAction'
import { db } from '@/app/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Admin = () => {

    const dispatch = useDispatch()
    const { orderData } = useSelector(state => state.orders)

    console.log("orderData", orderData)

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

    return (
        <div style={{
            marginLeft: "20rem",
            padding: "20px",
        }}>
            <h1>Admin</h1>
            <>
                <hr />

                <table
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
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    Shipped
                                </td>

                                {/* <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table >
            </>





        </div>
    )
}

export default Admin
