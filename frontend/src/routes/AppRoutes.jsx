import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import AboutUs from "../pages/About";
import ContactUs from "../pages/Contact";
import ProtectedRoute from "../components/ProtectedRoutes";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>

          <Home />

        </ProtectedRoute>
        } />
      <Route path="/products" element={
       <ProtectedRoute>
<Products />
         

        </ProtectedRoute>
    } />
      <Route path="/products/:id" element={
        <ProtectedRoute>
          <ProductDetails />
        </ProtectedRoute>
      } />
      <Route path="/cart" element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      } />
      <Route path="/checkout" element={ 
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/orders" element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      } />
      <Route path="/contact" element={
        <ProtectedRoute>
          <ContactUs />
        </ProtectedRoute>
      } />
      <Route path="/about" element={
        <ProtectedRoute>
          <AboutUs />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;