import { Routes, Route } from "react-router-dom";
import UserOrders from "../pages/client/UserOrders";
import ClientLayout from "../components/layouts/ClientLayout";
import ProtectedRoute from "./ProtectedRoutes";
import CartPage from "../pages/client/CartPage";

export default function ClientRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute requiredRole="client">
                        <ClientLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<UserOrders />} />
                <Route path="cart" element={<CartPage />} />
            </Route>
        </Routes>
    );
}
