import { Link } from "react-router-dom";

export default function UserList() {
  const users = [
    { id: 1, name: "Admin", email: "admin@ecom.local", role: "admin" },
    { id: 2, name: "Client One", email: "client@mail.com", role: "client" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Utilisateurs</h1>
        <Link
          to="/admin/users/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Ajouter
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Rôle</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3 space-x-2">
                <Link
                  to={`/admin/users/${u.id}/edit`}
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
