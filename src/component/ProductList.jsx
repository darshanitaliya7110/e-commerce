import React from 'react'

const ProductList = ({ products }) => {
    return (
        <div
            style={{
                marginLeft: "10rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                {products?.map((product) => {
                    return (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                padding: "20px",
                                margin: "10px",
                                textAlign: "center",
                                width: "200px",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.2em",
                                    margin: "10px 0",
                                }}
                            >
                                {product.name}
                            </h2>
                            <p
                                style={{
                                    color: "#888",
                                    margin: "10px 0",
                                }}
                            >
                                ₹{product.price}
                            </p>
                            <p
                                style={{
                                    color: "#888",
                                    margin: "10px 0",
                                }}
                            >
                                {product.category}
                            </p>
                            <p
                                style={{
                                    color: "#888",
                                    margin: "10px 0",
                                }}
                            >
                                {product.description}
                            </p>
                            <button
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#0070f3",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductList
