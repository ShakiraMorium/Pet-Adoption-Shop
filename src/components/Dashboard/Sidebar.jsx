import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const customerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
  ];

  const adminMenues = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/products", icon: FiPackage, label: "Products" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
    { to: "/users", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? adminMenues : customerMenus;

  return (
         
    <div className="drawer-side z-30">
      <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
      <aside className="flex min-h-full w-72 flex-col border-r border-slate-200 bg-slate-900 p-5 text-slate-200">
        
        {/* Sidebar header */}
        <div>
          <Link to="/" className="mb-8 flex items-center gap-2 px-1">
            <FiShoppingCart className="h-6 w-6 text-cyan-300" />
            <h1 className="text-xl font-bold text-white">Pet Admin</h1>
            
            
          </Link>
        </div>

        {/* Sidebar menu */}
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar footer */}
        <div className="mt-auto rounded-xl border border-slate-800 bg-slate-800/60 p-3 text-xs text-slate-400">
          Pet Adoption Platform Dashboard · 2026
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;