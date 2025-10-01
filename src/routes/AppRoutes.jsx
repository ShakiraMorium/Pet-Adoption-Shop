import { Route, Routes } from "react-router";
import About from "../Pages/About/About.jsx";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home.jsx";
import Shop from "../Pages/Shop/ShopPage.jsx";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard.jsx";
import PrivateRoute from "../components/PrivateRoute";
import ActiveAccount from "../components/Registration/ActiveAccount";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import Profile from "../Pages/Profile";
import PetDetail from "../Pages/PetDetail.jsx";
import Cart from "../Pages/Cart";
import Orders from "../Pages/Orders";
import PaymentSuccess from "../Pages/PaymentSuccess";
import AddPet from "../Pages/AddPet";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes  */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActiveAccount />} />
        <Route path="shop/:petId" element={<PetDetail />} />
        {/* <Route path="category/:id" element={<Category />} />  */}
      </Route>
      {/* Private Routes  */}
     <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment/success/" element={<PaymentSuccess />} />
        <Route path="pets/add" element={<AddPet />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;