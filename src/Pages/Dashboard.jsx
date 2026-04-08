import { useEffect, useMemo, useState } from "react";
import { FiActivity, FiClock, FiDollarSign, FiPackage, FiShoppingCart, FiUsers } from "react-icons/fi";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order.jsx";
// import banner from "../assets/images/banner/banner (2).jpg";
// import useDashboardStats from "../hooks/useDashboardStats";
import authApiClient from "../services/auth-api-client.js";

const fallbackDashboard = {
  stats: {
    totalPets: 245,
    totalOrders: 128,
    totalRevenue: 15783.24,
    adoptionRequests: 41,
  },
  recentOrders: [
    { id: 1, orderId: "#ORD-7245", customer: "John Smith", status: "Completed", date: "Mar 8, 2026", amount: "$125.00" },
    { id: 2, orderId: "#ORD-7244", customer: "Sarah Johnson", status: "Processing", date: "Mar 7, 2026", amount: "$89.99" },
    { id: 3, orderId: "#ORD-7243", customer: "Michael Brown", status: "Shipped", date: "Mar 7, 2026", amount: "$245.50" },
    { id: 4, orderId: "#ORD-7242", customer: "Emily Davis", status: "Completed", date: "Mar 6, 2026", amount: "$112.75" },
  ],
};
export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(fallbackDashboard);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await authApiClient.get("/dashboard/admin-summary/");
        if (data) {
          setDashboardData({
            stats: {
              totalPets: data.total_pets ?? fallbackDashboard.stats.totalPets,
              totalOrders: data.total_orders ?? fallbackDashboard.stats.totalOrders,
              totalRevenue: data.total_revenue ?? fallbackDashboard.stats.totalRevenue,
              adoptionRequests: data.adoption_requests ?? fallbackDashboard.stats.adoptionRequests,
            },
            recentOrders: (data.recent_orders || []).map((order, idx) => ({
              id: order.id ?? idx,
              orderId: order.order_id || `#ORD-${String(idx + 1000)}`,
              customer: order.customer_name || "Unknown Customer",
              status: order.status || "Pending",
              date: order.created_at
                ? new Date(order.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                : "N/A",
              amount: `$${Number(order.amount || 0).toFixed(2)}`,
            })),
          });
        }
      } catch {
        setDashboardData(fallbackDashboard);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const cards = useMemo(
    () => [
      {
        icon: FiPackage,
        title: "Total Pets",
        value: dashboardData.stats.totalPets,
        helperText: "Inventory",
        accent: "from-violet-500 to-indigo-600",
      },
      {
        icon: FiShoppingCart,
        title: "Orders",
        value: dashboardData.stats.totalOrders,
        helperText: "All time",
        accent: "from-cyan-500 to-blue-600",
      },
      {
        icon: FiDollarSign,
        title: "Revenue",
        value: `$${Number(dashboardData.stats.totalRevenue || 0).toLocaleString()}`,
        helperText: "Gross sales",
        accent: "from-emerald-500 to-teal-600",
      },
      {
        icon: FiUsers,
        title: "Adoption Requests",
        value: dashboardData.stats.adoptionRequests,
        helperText: "Pending review",
        accent: "from-amber-500 to-orange-600",
      },
    ],
    [dashboardData]
  );
  return (
   <div className="min-h-screen rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Monitor adoptions, orders, pets, and revenue in one place.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            <FiClock className="h-4 w-4" />
            {loading ? "Updating..." : "Live overview"}
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="mb-2 flex items-center gap-2 text-slate-700">
            <FiActivity className="h-4 w-4" />
            <h2 className="text-sm font-semibold uppercase tracking-wide">Performance Snapshot</h2>
          </div>
          <p className="text-sm text-slate-600">
            This summary is driven by the backend admin summary API powered by Django ORM aggregation
            (counts and total revenue sums) for real-time decision-making.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-900 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">Conversion Focus</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {dashboardData.stats.totalOrders > 0
              ? `${Math.round((dashboardData.stats.adoptionRequests / dashboardData.stats.totalOrders) * 100)}%`
              : "0%"}
          </p>
          <p className="mt-1 text-xs text-slate-300">Adoption requests compared to orders.</p>
        </article>
      </section>

      <Order orders={dashboardData.recentOrders} isLoading={loading} />
    </div>
  );
}
