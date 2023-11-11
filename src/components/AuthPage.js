// AuthPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './registro-login.css';

const AuthPage = () => {
  return (
    <div className="auth-page container">
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
