import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from '../../features/auth/AuthPage';
import DashboardMain from '../../features/dashboard/DashboardMain';

export default function App() {
  // Check if the user is logged in from our Mock Auth logic
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<AuthPage />} />

        {/* The Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <DashboardMain /> : <Navigate to="/login" />} 
        />

        {/* Catch-all: If they type a random URL, send them Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}