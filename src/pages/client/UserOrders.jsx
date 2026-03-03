import { Link } from "react-router-dom";

export default function UserOrders() {
	const orders = [
		{ id: "ord_001", date: "2025-11-01", total: 45.49, status: "Livré" },
		{ id: "ord_002", date: "2025-11-15", total: 23.0, status: "En cours" },
	];

	return (
			<section className="max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold mb-4">Mes commandes</h2>

				<div className="bg-white shadow rounded-lg p-4">
					{orders.map((o) => (
						<div key={o.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
							<div>
								<div className="font-semibold">Commande {o.id}</div>
								<div className="text-sm text-gray-500">{o.date} — {o.status}</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="font-medium">${o.total.toFixed(2)}</div>
								<Link to={`/client/orders/${o.id}`} className="text-blue-600 underline">Détails</Link>
							</div>
						</div>
					))}
				</div>
			</section>
	);
}

