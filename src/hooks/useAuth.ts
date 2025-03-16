import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { login, logout } from '@/store/slices/authSlice';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  const handleLogin = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        await dispatch(login(credentials)).unwrap();
        navigate('/dashboard');
      } catch (err) {
        console.error('Login failed:', err);
      }
    },
    [dispatch, navigate]
  );

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  }, [dispatch, navigate]);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login: handleLogin,
    logout: handleLogout,
  };
}; 