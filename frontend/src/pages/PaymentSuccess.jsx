import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/Axios";

const PaymentSuccess = () => {
  const [order, setOrder] = useState(null);

 useEffect(() => {
  const fetchOrder = async () => {
    try {
      const orderId =
        localStorage.getItem("lastOrderId");

      console.log("Order ID:", orderId);

      if (!orderId) {
        console.log("No order id found");
        return;
      }

      const res = await api.get(
        `/orders/${orderId}`
      );

      console.log("Order Response:", res.data);

      setOrder(res.data.order);
    } catch (error) {
      console.log(
        "FETCH ORDER ERROR:",
        error.response?.data || error
      );
    }
  };

  fetchOrder();
}, []);

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>

          <h1 className="text-3xl font-bold text-green-600">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 mt-2">
            Thank you for shopping with ShopEase.
          </p>
        </div>

        {/* Payment */}
        <div className="mt-8 bg-green-50 p-4 rounded-lg">
          <h2 className="font-semibold text-lg">
            Payment Method
          </h2>

          <p className="text-green-700 font-medium">
            {order.paymentMethod}
          </p>
        </div>

        {/* Address */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold text-lg mb-3">
            Delivery Address
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {order.shippingAddress.fullName}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {order.shippingAddress.phone}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {order.shippingAddress.email}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {order.shippingAddress.address}
          </p>

          <p>
            {order.shippingAddress.city},{" "}
            {order.shippingAddress.state} -{" "}
            {order.shippingAddress.pincode}
          </p>
        </div>

        {/* Products */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-4">
            Ordered Products
          </h2>

          <div className="space-y-3">
            {order.products.map((product, index) => (
              <div
                key={index}
                className="flex justify-between border p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {product.quantity}
                  </p>

                  <p className="text-sm text-gray-500">
                    Size: {product.size}
                  </p>
                </div>

                <div className="font-semibold">
                  ₹
                  {product.price *
                    product.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total Amount</span>
            <span>₹{order.totalAmount}</span>
          </div>
        </div>

        <Link
          to="/"
          className="block text-center mt-8 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;