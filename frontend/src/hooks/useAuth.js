import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;/*modified by HUSSAIN on 2024-06-01: Added error handling for missing context*/
}

export default useAuth;
