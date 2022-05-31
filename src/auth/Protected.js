import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const Protected = ({ children }) => {
  const auth = useAuth();
  if (!auth.getUser()) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

export default Protected;
