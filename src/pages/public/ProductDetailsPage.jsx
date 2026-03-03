import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import MainLayout from "../../components/layouts/MainLayout";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";
import useProduct from "../../hooks/useProduct";

export default function ProductDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
   // const product = products.find(p => p.id === Number(id));
   const {product, loading} = useProduct(id); 
    const { addToCart } = useContext(CartContext);
    const { isAuthenticated, role } = useContext(AuthContext);

    const manageCartAction = (product) =>{
        if(isAuthenticated){
            role==='client'?
            addToCart(product) : alert("vous devez avpoir un compte client pour passer des commandes");
        }else{
            navigate("/login");
        }
    }

    if (loading) {
        return (
            <MainLayout>
                <div className="text-center py-20">
                    <p className="mb-4 text-red-600">
                        Product not found (no API, no persisted state)
                    </p>
                    <Button onClick={() => navigate("/")}>
                        Back to Home
                    </Button>
                </div>
            </MainLayout>

        );
    }

    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto py-10 grid md:grid-cols-2 gap-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-contain"
                />

                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mb-4">
                        {product.description}
                    </p>

                    <p className="mb-2">
                        <strong>Category:</strong> {product.category}
                    </p>

                    <p className="mb-4">
                        <strong>Rating:</strong> ⭐ {product.rating.rate}
                    </p>

                    <div className="flex gap-4">
                        <span className="text-2xl font-bold">
                            ${product.price}
                        </span>
                             <button
                            onClick={() => manageCartAction(product)}
                            className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
                        >
                            Add to cart
                        </button>
                        
                    </div>
                </div>
            </div>
        </MainLayout>

    );
}
