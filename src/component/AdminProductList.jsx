"use client"

import React from 'react'
import { useSelector } from 'react-redux';

const AdminProductList = ({ handleEdit, handleDelete }) => {

    const { productData } = useSelector((state) => state.products);
    return (<>
        <div style={{
            marginLeft: "20rem",
            padding: "20px",
        }}>
            <h1>Product</h1>
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
                            Description
                        </th>
                        <th
                            style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                backgroundColor: '#f2f2f2',
                            }}
                        >
                            Category
                        </th>
                        <th
                            style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                backgroundColor: '#f2f2f2',
                            }}
                        >
                            Price
                        </th>

                        <th
                            style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                backgroundColor: '#f2f2f2',
                            }}
                        >
                            Edit
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
                    {productData.length > 0 && productData.map((item, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {item.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {item.description}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {item.category}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {item.price}
                            </td>
                            <td
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
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
            </table >
        </div>
    </>
    )
}

export default AdminProductList
