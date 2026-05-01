import React, { createContext, useContext, useMemo, useState } from 'react';
import { storage } from '../services/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const cached = window.localStorage.getItem('kekyaa_session_user');
    return cached ? JSON.parse(cached) : null;
  });

  const register = ({ fullName, email, password, phone }) => {
    const users = storage.getUsers();
    if (users.find((u) => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password,
      phone,
      role: 'customer',
      createdAt: new Date().toISOString(),
    };

    const nextUsers = [...users, newUser];
    storage.saveUsers(nextUsers);
    setUser(newUser);
    window.localStorage.setItem('kekyaa_session_user', JSON.stringify(newUser));
  };

  const login = ({ email, password }) => {
    const users = storage.getUsers();
    const matched = users.find((u) => u.email === email && u.password === password);
    if (!matched) throw new Error('Invalid email or password');
    setUser(matched);
    window.localStorage.setItem('kekyaa_session_user', JSON.stringify(matched));
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('kekyaa_session_user');
  };

  const promoteAdmin = () => {
    if (!user) return;
    const users = storage.getUsers();
    const nextUsers = users.map((u) => (u.id === user.id ? { ...u, role: 'admin' } : u));
    storage.saveUsers(nextUsers);
    const adminUser = { ...user, role: 'admin' };
    setUser(adminUser);
    window.localStorage.setItem('kekyaa_session_user', JSON.stringify(adminUser));
  };

  const value = useMemo(() => ({ user, register, login, logout, promoteAdmin }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
