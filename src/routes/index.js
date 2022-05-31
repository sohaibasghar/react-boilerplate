import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../auth/auth';
import Protected from '../auth/Protected';
import Header from '../layout/Header';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import routes from './routes';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Protected>
                  <Header />
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <route.component />
                  </Suspense>
                </Protected>
              }
            />
          ))}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
