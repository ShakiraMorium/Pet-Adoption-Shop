import { FiBell, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = ({ sidebarOpen }) => {
  return (
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3 md:px-6">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="drawer-toggle"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-700"
          >
            {sidebarOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </label>
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-900">Dashboard Overview</h2>
          <p className="text-xs text-slate-500">Pet adoption management system</p>
        </div>

        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 md:flex">
          <FiSearch className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search pets or orders"
            className="w-48 border-none bg-transparent text-sm text-slate-700 outline-none"
          />
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600">
          <FiBell className="h-5 w-5" />
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full  ring-2 ring-indigo-10">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge badge-info">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;