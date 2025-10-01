import { NavLink } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-2 border-b-2 border-red-600">
      {/* <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
        About
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
        Products
      </NavLink> */}

      <div className="navbar bg-black shadow-sm text-white border-red-600">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                >
                  About
                </NavLink>
                <ul className="p-2 text-black">
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logIn"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                >
                  LogIn
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center ">
            <img
              className="ml-4 w-52"
              src="/public/images/new-logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : "text-white"
                    }
                  >
                    About
                  </NavLink>
                </summary>
                <ul className="p-2 text-black">
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                LogIn
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end mr-6">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end mr-8">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <a className="justify-between">
                  Profile<span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// new navbar

// import { Link } from "react-router-dom";
// import { FaBars, FaShoppingCart } from "react-icons/fa";
// // import Button from "./Button"; // ✅ import your button component

// const Navbar = () => {
//   return (
//     <div className="navbar bg-black text-white px-4 md:px-8">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         {/* Mobile Menu Button */}
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <FaBars size={20} />
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
//           >
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/products">Products</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             {/* 👇 Mobile view buttons */}
//             <li className="mt-2">
//               <Button />
//             </li>
//           </ul>
//         </div>

//         {/* Logo */}
//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           Pet Shop
//         </Link>
//       </div>

//       {/* Navbar Center (visible on large screens only) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center gap-4">
//         {/* Cart Icon */}
//         <button className="relative">
//           <FaShoppingCart size={22} />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
//             3
//           </span>
//         </button>

//         {/* Avatar */}
//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-8 rounded-full">
//               <img src="https://i.pravatar.cc/40" alt="User" />
//             </div>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
//           >
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/settings">Settings</Link></li>
//             <li><Link to="/logout">Logout</Link></li>
//           </ul>
//         </div>

//         {/* ✅ Your Buttons (desktop) */}
//         <div className="hidden lg:flex">
//           <Button />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
