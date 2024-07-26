"use client"

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = ({ isAdmin }) => {

    const { cartData } = useSelector(state => state.cart)

    return (
        <nav
            style={{
                backgroundColor: '#333',
                padding: '15px 25px',
                color: '#fff',
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}>
                <Link
                    href="/product"
                    style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "white",
                        textDecoration: "none",
                        marginBottom: "10px",
                        transition: "background-color 0.3s",
                    }}
                >
                    E-Commerce
                </Link>
                <div
                    style={{
                        display: 'flex',
                        gap: '15px',
                        justifyContent: 'space-end',
                    }}>
                    {isAdmin ? <Link
                        href="/product"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1em',
                        }}>
                        {cartData.length > 0 ? `(${cartData.length})` : ""}
                        Products
                    </Link> :
                        <Link
                            href="/cart"
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: '1em',
                            }}>
                            {cartData.length > 0 ? `(${cartData.length})` : ""}
                            Cart
                        </Link>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
