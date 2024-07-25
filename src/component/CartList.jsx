import { clearCart, removeFromCart } from '@/actions/cartAction'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartList = () => {

    const dispatch = useDispatch()
    const { cartData } = useSelector(state => state.cart)

    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveFromCart = (id) => {
        if (confirm("Are you sure you want to remove product from cart?")) dispatch(removeFromCart({ id }))
    }
    return (
        <div style={{
            marginLeft: "8rem",
            flexWrap: "wrap",
            justifyContent: "right",
            padding: "10px",
        }}>
            <div style={{
                width: '25rem',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
            >

                <h2
                    style={{
                        textAlign: 'center',
                        fontSize: '2em',
                        marginBottom: '20px',
                    }}>
                    Cart
                </h2>

                {cartData.length === 0 ? (
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '1.2em',
                            color: '#888',
                        }}>
                        No items in cart
                    </p>
                ) : (
                    cartData.map((item) => (
                        <div key={item.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 0',
                                borderBottom: '1px solid #ddd',
                            }}>
                            <h4
                                style={{
                                    flex: '2',
                                    fontSize: '1.2em',
                                    margin: '0',
                                }}>
                                {item.name}
                            </h4>
                            <p
                                style={{
                                    flex: '1',
                                    fontSize: '1em',
                                    color: '#555',
                                    textAlign: 'left',
                                }}>
                                {item.quantity} X ${item.price} = {item.quantity * item.price}
                            </p>
                            <button
                                style={{
                                    flex: '1',
                                    padding: '10px',
                                    backgroundColor: '#ff6347',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                }} onClick={() => handleRemoveFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))
                )}
                {cartData.length > 0 &&
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 0',
                                borderTop: '1px solid #ddd',
                                marginTop: '20px',
                            }}>
                            <h4
                                style={{
                                    fontSize: '1.2em',
                                    margin: '0',
                                }}>
                                Total Price:
                            </h4>
                            <p
                                style={{
                                    fontSize: '1.2em',
                                    color: '#555',
                                    textAlign: 'center',
                                }}>
                                {totalPrice.toFixed(2)}
                            </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <button
                                style={{
                                    flex: '1',
                                    padding: '10px',
                                    backgroundColor: '#888888',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    margin: "1rem"
                                }} onClick={() => { }}>
                                Continue Shopping
                            </button>
                            <button
                                style={{
                                    flex: '1',
                                    padding: '10px',
                                    backgroundColor: '#ff6347',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    margin: "1rem"
                                }} onClick={() => { }}>
                                Checkout
                            </button>

                        </div>
                    </>
                }

            </div >
        </div >
    )
}

export default CartList
