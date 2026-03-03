import { Link } from "react-router-dom";

export default function UserAdd() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ajouter un utilisateur</h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Nom</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mot de passe</label>
          <input type="password" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Rôle</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>client</option>
            <option>deliveryman</option>
            <option>admin</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enregistrer
          </button>
          <Link to="/admin/users" className="px-4 py-2 border rounded">
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
