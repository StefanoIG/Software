// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Header from './components/Header';
import Inicio from './components/Inicio';
import { isUserAuthenticated } from './authentication'; // Ajusta la ruta según la ubicación real de tu utilidad

function App() {
  const isAuthenticated = isUserAuthenticated();

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/*" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
