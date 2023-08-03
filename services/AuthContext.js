import { createContext, useState } from 'react';
import { loginUser } from '@/services/auth'; // Import the loginUser function

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function login(email, password) {
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      setUser(response);
      setError(null);
      localStorage.setItem('userToken', response.userToken); // Store the userToken in localStorage
    } catch (error) {
      setError(error.message);
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('userToken'); // Remove the userToken from localStorage
  }

  const authContextValue = {
    user,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
