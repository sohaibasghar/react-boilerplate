import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);
  const login = (user) => {
    localStorage.setItem('user', user);
  };
  const getUser = () => {
    return localStorage.getItem('user');
  };
  const logout = () => {
    localStorage.removeItem('user');
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
