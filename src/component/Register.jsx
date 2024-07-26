"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { auth } from '@/app/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { redirect, useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  if (localStorage.getItem("userUID")) {
    redirect('/admin/order')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }


    await createUserWithEmailAndPassword(auth, email, password)

    router.push("/admin")

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Register</h2>
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ padding: '10px', margin: '10px 0' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', margin: '10px 0' }}>Register</button>
        <Link href="/admin">Login</Link>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default Register
