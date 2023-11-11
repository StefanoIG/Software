// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Header.module.css'; // Importa el módulo de estilo CSS para el header

const Header = ({ isAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        document.cookie = 'authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        window.location.href = '/login'; // Redirige directamente para asegurar la recarga de la página
      }
    });
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de nosotros</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
