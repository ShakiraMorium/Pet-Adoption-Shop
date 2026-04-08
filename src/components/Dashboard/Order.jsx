const getOrderId = (order, index) => order?.id || order?.order_id || `ORD-${index + 1}`;
const getCustomer = (order) =>
  order?.customer_name || order?.customer?.name || order?.user?.username || "N/A";
const getStatus = (order) => order?.status || "Pending";
const getDate = (order) => {
  const value = order?.created_at || order?.created || order?.createdAt || order?.date;
  if (!value) return "—";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "—";
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const getAmount = (order) =>
  Number(order?.total_price ?? order?.total ?? order?.amount ?? 0) || 0;

const statusClasses = {
  completed: "bg-emerald-100 text-emerald-700",
  processing: "bg-amber-100 text-amber-700",
  shipped: "bg-sky-100 text-sky-700",
  pending: "bg-slate-100 text-slate-700",
};
  const Order = ({ orders = [] }) => {
  return (
     <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4">
        <h3 className="text-lg font-semibold text-slate-800">Recent Orders</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3 text-left font-semibold text-slate-600">Order ID</th>
              <th className="px-5 py-3 text-left font-semibold text-slate-600">Customer</th>
              <th className="px-5 py-3 text-left font-semibold text-slate-600">Status</th>
              <th className="px-5 py-3 text-left font-semibold text-slate-600">Date</th>
              <th className="px-5 py-3 text-right font-semibold text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {orders.length === 0 ? (
              <tr>


                <td className="px-5 py-6 text-slate-500" colSpan={5}>
              
                </td>
                
              </tr>
            
          
            ) : (
              orders.map((order, index) => (
                <tr key={getOrderId(order, index)}>
                  <td className="px-5 py-3 text-slate-700">{getOrderId(order, index)}</td>
                  <td className="px-5 py-3 text-slate-700">{getCustomer(order)}</td>
                  <td className="px-5 py-3">
                    <div className={`badge ${statusClasses[getStatus(order)]}`}>
                      {getStatus(order)}
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-700">{getDate(order)}</td>
                  <td className="px-5 py-3 text-right font-semibold text-slate-900">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(getAmount(order))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
  </section>
  );
};

export default Order;