import { Link } from "react-router-dom";

export default function ProductAdd() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ajouter un produit</h1>

      <form className="space-y-4">
        <input placeholder="Nom" className="w-full border px-3 py-2 rounded" />
        <input placeholder="Prix" type="number" className="w-full border px-3 py-2 rounded" />
        <input placeholder="Catégorie" className="w-full border px-3 py-2 rounded" />

        <textarea
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Enregistrer
          </button>
          <Link to="/admin/products" className="px-4 py-2 border rounded">
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
