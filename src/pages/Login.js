import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';

const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = () => {
    auth.login(user);
    navigate('/');
  };

  return (
    <div>
      {auth.getUser() && <Navigate to={'/'} />}
      <label>Username:</label>
      <input value={user} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
