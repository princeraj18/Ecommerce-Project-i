import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);
  const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between relative shadow-md">

      {/* Logo */}
      <div className="text-2xl font-bold">ShopEase</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        <span onClick={()=>{
          navigate("/")
        }} className="cursor-pointer hover:text-gray-200">Home</span>
      
       <span onClick={()=>{
          navigate("/products")
        }} className="cursor-pointer hover:text-gray-200">Products</span>
  
        <span onClick={()=>{
          navigate("/about")
        }} className="cursor-pointer hover:text-gray-200">About Us</span>
        <span onClick={()=>{
          navigate("/contact")
        }} className="cursor-pointer hover:text-gray-200">Contact Us</span>
      </div>

      {/* Icons (Desktop) */}
      <div className="hidden md:flex items-center gap-5 text-xl">
       <div
  className="relative cursor-pointer"
  onClick={() => navigate("/cart")}
>
  <FaShoppingCart className="text-xl hover:text-gray-200" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
      {cartCount}
    </span>
  )}
</div>
  <FaUser onClick={() => navigate("/profile")} className="cursor-pointer hover:text-gray-200" />
      </div>

      {/* Mobile Button */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg flex flex-col gap-4 p-4 md:hidden">

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md outline-none"
          />

          {/* Icons */}
          <div className="flex justify-around text-xl py-2">
            <div
  className="relative"
  onClick={() => navigate("/cart")}
>
  <FaShoppingCart />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
      {cartCount}
    </span>
  )}
</div>
            <FaUser />
          </div>

        </div>
      )}
    </nav>
  );
}