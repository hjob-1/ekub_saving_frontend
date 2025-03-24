import React, { useState } from 'react';
import Register from './pages/public/Register';
import Login from './pages/public/Login';
import ForgotPassword from './pages/public/ForgotPassword';
import ResetPassword from './pages/public/ResetPassword';
import AppRoutes from './appRoutes/routes';
import { BrowserRouter as Router } from 'react-router';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
