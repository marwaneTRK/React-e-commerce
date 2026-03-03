import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import NotFoundPage from "../pages/public/NotFoundPage";
import LoginPage from "../pages/public/auth/LoginPage";



export default function PublicRoutes() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="products/:id/details" element={<ProductDetailsPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
