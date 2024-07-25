"use client"

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {

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
                <div
                    href="/"
                    style={{
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        color: '#fff',
                        textDecoration: 'none',
                    }}>
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '15px',
                        justifyContent: 'space-end',
                    }}>
                    <Link
                        href="/cart"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1em',
                        }}>
                        {cartData.length > 0 ? `(${cartData.length})` : ""}
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
