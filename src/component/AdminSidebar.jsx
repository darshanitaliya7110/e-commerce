"use client"

import { clearUser } from '@/actions/userAction'
import { getAuth, signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const AdminSidebar = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const [UID, setUID] = useState(null)

    useEffect(() => {
        const userUID = localStorage.getItem("userUID")
        setUID(userUID)
    }, [])

    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth).then().catch((error) => { throw error })

        dispatch(clearUser())
        router.push("/product")

        localStorage.removeItem("userUID")
    }

    return (
        <>
            {UID && <div
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
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            }</>
    )
}

export default AdminSidebar
