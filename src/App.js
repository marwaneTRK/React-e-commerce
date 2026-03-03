import { useEffect } from 'react';
import { initializeUsers } from './api/auth';
import './App.css';
import PublicRoutes from './router/PublicRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import AdminRoutes from './router/AdminRoutes';
import ClientRoutes from './router/ClientRoutes';
import { CartProvider } from './contexts/CartProvider';


function App() {

  useEffect(() => {
    initializeUsers();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/client/*" element={<ClientRoutes />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
