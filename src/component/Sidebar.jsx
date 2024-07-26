"use client"

import { categories } from '@/data';
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

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
                    {categories.map((item, ind) => {
                        return <li key={ind}>
                            <Link
                                href={`/product/${item}`}
                                style={{
                                    display: "block",
                                    padding: "10px 20px",
                                    color: "white",
                                    textDecoration: "none",
                                    marginBottom: "10px",
                                    transition: "background-color 0.3s",
                                }}
                            >
                                {item}
                            </Link>
                        </li>
                    })}
                    <li >
                        <Link
                            href={`/admin`}
                            style={{
                                display: "block",
                                padding: "10px 20px",
                                color: "white",
                                textDecoration: "none",
                                marginBottom: "10px",
                                transition: "background-color 0.3s",
                            }}
                        >
                            Administration
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
