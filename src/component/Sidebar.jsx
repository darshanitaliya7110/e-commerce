import Link from 'next/link'
import React from 'react'

const Sidebar = ({ categories }) => {


    return (
        <div
            style={{
                width: "10rem",
                height: "100vh",
                backgroundColor: "#333",
                color: "white",
                position: "fixed",
                top: "0",
                left: "0",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "10rem",
                    height: "100vh",
                    backgroundColor: "#333",
                    color: "white",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                    }}
                >
                    <h6>
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
                    </h6>
                </div>
                <ul
                    style={{
                        listStyle: "none",
                        padding: "0",
                    }}
                >
                    {categories?.map((item, ind) => {
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
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
