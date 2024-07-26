"use client"

import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
    return (
        <div
            style={{
                backgroundColor: "#333",
                color: "white",
                position: "fixed",
                padding: "20px",
            }}
        >
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#333",
                    color: "white",
                    padding: "20px",
                }}
            >
                <ul
                    style={{
                        listStyle: "none",
                        padding: "0",
                    }}
                >
                    <li>
                        <Link
                            href={`/admin/order`}
                            style={{
                                display: "block",
                                padding: "10px 20px",
                                color: "white",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "background-color 0.3s",
                            }}
                        >
                            Order
                        </Link>
                    </li>
                    <li >
                        <Link
                            href={`/admin/productlist`}
                            style={{
                                display: "block",
                                padding: "10px 20px",
                                color: "white",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "background-color 0.3s",
                            }}
                        >
                            All Products
                        </Link>
                    </li>
                    <li >
                        <Link
                            href={`/product`}
                            style={{
                                display: "block",
                                padding: "10px 20px",
                                color: "white",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "background-color 0.3s",
                            }}
                            onClick={() => { console.log("Logout") }}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar
