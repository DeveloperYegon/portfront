// src/contexts/AppProviders.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import { BlogProvider } from './BlogContext';

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <BlogProvider>
        {children}
      </BlogProvider>
    </AuthProvider>
  );
};

export default AppProviders;
