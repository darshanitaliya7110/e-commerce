"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const ThankYou = () => {
    const router = useRouter()

    const handleReturnToStore = () => {
        router.push("/product")
    }

    return (
        <div style={{
            marginLeft: "20rem",
            padding: "20px",
        }}>
            <h1>SPORTS STORE</h1>
            <div >
                <h2>Thanks!</h2>
                <p>Thanks for placing your order.</p>
                <button onClick={() => handleReturnToStore()}>Return to Store</button>
            </div>
        </div>
    )
}

export default ThankYou
