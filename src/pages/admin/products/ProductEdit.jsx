import { Link } from "react-router-dom";

export default function ProductEdit() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Modifier produit</h1>

      <form className="space-y-4">
        <input
          defaultValue="Laptop"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          defaultValue="1200"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          defaultValue="Electronics"
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          defaultValue="Description produit"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Mettre à jour
          </button>
          <Link to="/admin/products" className="px-4 py-2 border rounded">
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
