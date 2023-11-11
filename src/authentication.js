// Utilidad para verificar si el usuario está autenticado
export const isUserAuthenticated = () => {
    // Obtén todas las cookies
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  
    // Busca la cookie que indica autenticación
    const isAuthenticatedCookie = cookies.find(cookie => cookie.startsWith('authenticated='));
  
    // Si la cookie existe, el usuario está autenticado
    return isAuthenticatedCookie !== undefined;
  };
  