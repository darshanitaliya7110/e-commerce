"use client"

import { setUser } from '@/actions/userAction';
import { auth } from '@/app/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation'


const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter()

  if (localStorage.getItem("userUID")) {
    redirect('/admin/order')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setMessage("Enter valid input")
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid }))
        localStorage.setItem('userUID', JSON.stringify({ uid: user.uid }));
        router.push("/admin/order")
      }
    })

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Login</h2>
        <label>
          Email:
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', margin: '10px 0' }}
          />
        </label>
        <label>
          Password:
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', margin: '10px 0' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', margin: '10px 0' }}>Login</button>
        <Link href="/admin/register">Register</Link>
        {message && <p>{message}</p>}
      </form>

    </div>
  );
}

export default Login
