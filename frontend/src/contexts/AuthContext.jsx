import { createContext, useEffect, useState } from 'react';
import authService from '../services/authService';
import { getStoredToken, removeStoredToken, setStoredToken } from '../utils/storage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getStoredToken());
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      if (!token) {
        if (isMounted) {
          setUser(null);
          setIsLoading(false);
        }
        return;
      }

      try {
        const profile = await authService.getProfile();
        if (isMounted) {
          setUser(profile);
        }
      } catch (error) {
        removeStoredToken();
        if (isMounted) {
          setToken(null);
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    function handleFocusRefresh() {
      if (token) {
        loadProfile();
      }
    }

    function handleVisibilityRefresh() {
      if (token && document.visibilityState === 'visible') {
        loadProfile();
      }
    }

    loadProfile();
    window.addEventListener('focus', handleFocusRefresh);
    document.addEventListener('visibilitychange', handleVisibilityRefresh);

    return () => {
      isMounted = false;
      window.removeEventListener('focus', handleFocusRefresh);
      document.removeEventListener('visibilitychange', handleVisibilityRefresh);
    };
  }, [token]);

  const value = {
    token,
    user,
    isAuthenticated: Boolean(token && user),
    isLoading,
    async login(credentials) {
      const response = await authService.login(credentials);
      setStoredToken(response.token);
      setToken(response.token);
      setUser(response.user);
      return response.user;
    },
    async register(payload) {
      const response = await authService.register(payload);
      setStoredToken(response.token);
      setToken(response.token);
      setUser(response.user);
      return response.user;
    },
    async logout() {
      try {
        if (token) {
          await authService.logout();
        }
      } catch (error) {
        // Logout is best-effort for stateless JWT sessions.
      } finally {
        removeStoredToken();
        setToken(null);
        setUser(null);
      }
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
