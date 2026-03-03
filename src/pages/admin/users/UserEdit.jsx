import { Link } from "react-router-dom";

export default function UserEdit() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Modifier utilisateur</h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Nom</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Rôle</label>
          <select defaultValue="client" className="w-full border px-3 py-2 rounded">
            <option value="client">Client</option>
            <option value="deliveryman">Livreur</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Mettre à jour
          </button>
          <Link to="/admin/users" className="px-4 py-2 border rounded">
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
