export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">124</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Total Categories</p>
          <h2 className="text-3xl font-bold mt-2">8</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Orders Today</p>
          <h2 className="text-3xl font-bold mt-2">32</h2>
        </div>

      </div>
    </div>
  );
}
