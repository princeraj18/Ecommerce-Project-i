import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =useContext(ShopContext);
console.log(cartItems);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);

const shipping = 20;

const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
  key={`${item._id}-${item.selectedSize}`}
  className="bg-white p-5 rounded-xl shadow-md flex items-center gap-5"
>
  <img
    src={item.image[0]}
    alt={item.name}
    className="w-24 h-24 object-cover rounded-lg"
  />

  <div className="flex-1">
    <h3 className="font-semibold">
      {item.name}
    </h3>

    <p className="text-sm text-gray-500">
      Size: {item.selectedSize}
    </p>

    <p className="text-indigo-600 font-bold mt-2">
      ₹{item.price}
    </p>
  </div>

  {/* Quantity Controls */}
  <div className="flex items-center gap-3">
    <button
      onClick={() =>
        decreaseQuantity(
          item._id,
          item.selectedSize
        )
      }
      className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold"
    >
      -
    </button>

    <span className="font-semibold text-lg">
      {item.quantity}
    </span>

    <button
      onClick={() =>
        increaseQuantity(
          item._id,
          item.selectedSize
        )
      }
      className="w-8 h-8 bg-indigo-600 text-white rounded-full text-lg font-bold"
    >
      +
    </button>
  </div>

  <div className="w-24 text-right">
    <p className="font-bold">
      ₹{item.price * item.quantity}
    </p>
  </div>

  <button
    onClick={() =>
      removeFromCart(item._id)
    }
    className="text-red-500"
  >
    Remove
  </button>
</div>
      ))}

      <div className="bg-white shadow rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold">
          Total: ₹{total}
        </h2>

        <button
          onClick={() =>
            navigate("/checkout")
          }
          className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;