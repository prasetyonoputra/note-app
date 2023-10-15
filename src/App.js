import React from 'react';

import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPasswordPage from './pages/forgot-password-page/ForgotPasswordPage';
import RegisterPage from './pages/register-page/RegisterPage';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
