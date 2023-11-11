// LoginForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const history = useNavigate();

  const handleLogin = () => {
    // Obtén el estado de usuario autenticado de las cookies
    const authenticated = document.cookie.split(';').some((item) => item.trim().startsWith('authenticated='));

    // Simulación de autenticación
    if (authenticated || (username === 'usuario' && password === 'contraseña')) {
      // Autenticación exitosa
      document.cookie = `authenticated=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
      setError('');
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500,
        position: 'top-end',
        toast: true,
      });
    } else {
      // Autenticación fallida
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
        position: 'top-end',
        toast: true,
        timer: 2500,
      });
    }
  };

  const handleForgotPassword = async () => {
    const { value: inputEmail } = await Swal.fire({
      title: 'Recuperar Contraseña',
      input: 'email',
      inputLabel: 'Ingresa tu correo electrónico',
      inputPlaceholder: 'Correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        // Aquí puedes implementar la lógica para enviar un correo electrónico
        // con instrucciones para restablecer la contraseña
        console.log('Correo electrónico para restablecer la contraseña enviado a:', email);

        // Puedes retornar una promesa que resuelva si el envío es exitoso
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000); // Simula un tiempo de espera para el envío del correo
        });
      },
    });

    if (inputEmail) {
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: `Se ha enviado un correo electrónico a ${inputEmail} con instrucciones para restablecer la contraseña.`,
        position: 'top-end',
        toast: true,
        timer: 2500,
      });
    }
  };

  return (
    <div className="login-form ">
      <h2>Iniciar Sesión</h2>
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
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        <strong onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</strong>
      </p>
      <p>
        ¿No tienes cuenta? <strong> <a href="/register">Regístrate aquí </a></strong>
      </p>
    </div>
  );
};

export default LoginForm;
