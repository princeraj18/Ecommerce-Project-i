import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  // Product Total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Shipping Charge
  const shipping = cartItems.length > 0 ? 20 : 0;

  // Final Total
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your Cart is Empty
          </h2>

          <button
            onClick={() => navigate("/products")}
            className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
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
                  <h3 className="font-semibold text-lg">
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

                {/* Item Total */}
                <div className="w-28 text-right">
                  <p className="font-bold text-lg">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-xl p-6 mt-8 max-w-md ml-auto">
            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Products Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>₹{shipping}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Grand Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;