'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Authentication logic - Replace with your own logic
    if (userId === 'user1' && password === 'password1') {
      // Redirect to user1 dashboard upon successful login
      router.push('/dashboard/user1');
    } else 
    if (userId === 'user2' && password === 'password2') {
      // Redirect to user2 dashboard upon successful login
      router.push('/dashboard/user2');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
