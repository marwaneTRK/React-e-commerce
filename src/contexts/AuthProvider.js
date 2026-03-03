import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import authApi from "../api/auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Vérifie l'utilisateur courant au chargement du provider
  useEffect(() => {
    loadCurrentUser();
  }, []);

  async function loadCurrentUser() {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setRole(null);
        setLoading(false);
        return;
      }

      const isValid = await authApi.verifyToken(token);
      if (!isValid) {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setUser(null);
        setRole(null);
        setLoading(false);
        return;
      }

      const res = await authApi.getCurrentUser(token);
      setUser(res.user);
      setRole(res.user.role);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth Error:", error);
      localStorage.removeItem("authToken");
      localStorage.removeItem("auth_token");
      setIsAuthenticated(false);
      setUser(null);
      setRole(null);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      const token = localStorage.getItem("authToken") || localStorage.getItem("auth_token");
      if (token) {
        await authApi.logout(token);
      }
    } catch (e) {
      // ignore errors
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        loading,
        logout,
        refreshAuth: loadCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
