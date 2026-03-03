import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Headphones", price: 150, category: "Audio" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Produits</h1>
        <Link
          to="/admin/products/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Ajouter
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Prix</th>
            <th className="p-3 text-left">Catégorie</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b">
              <td className="p-3">{p.name}</td>
              <td className="p-3">${p.price}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">
                <Link
                  to={`/admin/products/${p.id}/edit`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                >
                  Modifier
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
