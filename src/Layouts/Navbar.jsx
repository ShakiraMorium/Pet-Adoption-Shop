
import { FaChevronDown, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import useAuthContext from "../hooks/useAuthContext";

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
    isActive ? "bg-pink-500 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
  }`;

const Navbar = () => {

    
  const { cart } = useCartContext();
  const { user, logoutUser } = useAuthContext();
  const cartItems = cart?.items || [];
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + Number(item.total_price || 0), 0);

      
  return (
    <header className="sticky top-0 z-50 border-b border-pink-500/30 bg-black">
      <div className="navbar max-w-7xl mx-auto px-3 sm:px-5">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            
              
            <button tabIndex={0} type="button" className="btn btn-ghost text-white lg:hidden" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            
            
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 z-[1] w-52 rounded-xl bg-white p-2 shadow-xl text-gray-700">
              <li>
               
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-pink-600 font-semibold" : "text-gray-700")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  
                  className={({ isActive }) => (isActive ? "text-pink-600 font-semibold" : "text-gray-700")}
                >
                  About
                </NavLink>
                
              </li>
              <li>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? "text-pink-600 font-semibold" : "text-gray-700")}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                 
                  className={({ isActive }) => (isActive ? "text-pink-600 font-semibold" : "text-gray-700")}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  
                  
                  to="/login"
                  className={({ isActive }) => (isActive ? "text-pink-600 font-semibold" : "text-gray-700")}
                >
                  
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          


          <Link to="/" className="flex items-center gap-2">
            <img className="h-11 w-auto" src="/images/new-logo.png" alt="Pet Adoption Shop" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
         
          <nav>
            <ul className="flex items-center gap-1">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={navLinkClass}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
       

        <div className="navbar-end gap-2 sm:gap-3">
          <div className="dropdown dropdown-end">
            <button type="button" tabIndex={0} className="btn btn-ghost btn-circle text-white hover:bg-white/10" aria-label="Open cart">
              <div className="indicator">
                
                <FaShoppingBag size={18} />
                <span className="badge badge-sm indicator-item border-none bg-pink-500 text-white">{cartCount}</span>
              </div>
           
            
            </button>
            <div className="card card-compact dropdown-content mt-3 z-[1] w-80 bg-white shadow-xl text-gray-700">
              <div className="card-body">
                
                <span className="text-lg font-bold">{cartCount} item(s)</span>
                <span className="text-sm">Subtotal: ${cartSubtotal.toFixed(2)}</span>
                <div className="max-h-40 overflow-auto rounded-lg bg-gray-50 p-2 space-y-2">
                  {cartItems.length === 0 ? (
                    <p className="text-sm text-gray-500">Your cart is empty.</p>
                  ) : (
                    cartItems.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm">
                        <span className="truncate pr-2">{item.pet?.name}</span>
                        <span>x{item.quantity}</span>
                      </div>
                    ))
                  )}
                </div>
                <div className="card-actions">
                  
                  <Link to="/dashboard/cart" className="btn btn-primary btn-block">
                    View Cart Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
         
             

          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost text-white hover:bg-white/10 rounded-full px-3 normal-case border border-white/15 list-none">
              <FaUserCircle size={18} />
              <span className="hidden sm:inline">Account</span>
              <FaChevronDown className="opacity-70" size={12} />
            </summary>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-44 rounded-xl bg-white p-2 shadow-xl text-gray-700">
              <li>
                
              
                <Link to="/dashboard">Profile</Link>
              </li>
              <li>
                
                <Link to="/dashboard">Settings</Link>
              </li>
              <li>
                
                <button type="button" onClick={logoutUser} className="text-left">
                  Logout
                </button>
              </li>
            </ul>
         
          </details>

          {user ? (
            <NavLink to="/dashboard" className="btn btn-sm rounded-full border-none bg-pink-500 text-white hover:bg-pink-600">
              Dashboard
            </NavLink>
          ) : (
            <NavLink to="/login" className="btn btn-sm rounded-full border-none bg-pink-500 text-white hover:bg-pink-600">
              Login
            </NavLink>
          )}
        </div>
      </div>
    
    </header>
  );
};

export default Navbar;
