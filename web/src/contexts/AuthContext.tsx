'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, LoginForm, SignupForm } from '../types';
import { getStorageItem, setStorageItem, removeStorageItem } from '../lib/utils';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginForm) => Promise<void>;
  signup: (data: SignupForm) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication data on mount
    const storedUser = getStorageItem<User | null>('auth_user', null);
    const storedToken = getStorageItem<string | null>('auth_token', null);
    
    if (storedUser && storedToken) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (credentials: LoginForm): Promise<void> => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data for demo purposes
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Demo User',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      // Mock token
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      setUser(mockUser);
      setStorageItem('auth_user', mockUser);
      setStorageItem('auth_token', mockToken);
    } catch (_error) {
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: SignupForm): Promise<void> => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      // Mock user data for demo purposes
      const mockUser: User = {
        id: '1',
        email: data.email,
        name: data.name,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      // Mock token
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      setUser(mockUser);
      setStorageItem('auth_user', mockUser);
      setStorageItem('auth_token', mockToken);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    removeStorageItem('auth_user');
    removeStorageItem('auth_token');
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};