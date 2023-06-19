import './App.css';
import React from 'react';
import Home from './pages/home';
import Login from './component/login';
import Register from './component/register';
import ProtectedRoutes from './routes/protected-routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Protected Routes */}
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
