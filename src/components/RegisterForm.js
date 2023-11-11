// RegisterForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simulación de registro
    if (password === confirmPassword) {
      // Registro exitoso
      document.cookie = `authenticated=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Ahora puedes iniciar sesión con tus credenciales.',
      }).then(() => {
        navigate('/login'); // Redireccionar a la página de inicio de sesión
      });
    } else {
      // Contraseñas no coinciden
      Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div className="register-form ">
      <h2>Registro</h2>
      <form>
        <div className='form-group'>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default RegisterForm;
