import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Checkout = () => {
  const { cartItems } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shippingData, setShippingData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const SHIPPING_CHARGE = 20;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + SHIPPING_CHARGE;

  const handleChange = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      shippingInfo: shippingData,
      paymentMethod,
      products: cartItems,
      subtotal,
      shippingCharge: SHIPPING_CHARGE,
      totalAmount: total,
    };

    console.log(orderData);

    // Backend API call
    /*
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders/create",
        orderData
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    */
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={shippingData.fullName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={shippingData.phone}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={shippingData.email}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={shippingData.city}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={shippingData.state}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={shippingData.pincode}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                />

              </div>

              <textarea
                rows="4"
                name="address"
                placeholder="Full Address"
                value={shippingData.address}
                onChange={handleChange}
                className="w-full mt-5 border rounded-lg px-4 py-3"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center gap-3 border rounded-lg p-4">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Cash On Delivery
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4">
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  UPI Payment
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Debit / Credit Card
                </label>

              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>

            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-5">

              <h2 className="text-2xl font-semibold mb-6">
                Order Summary
              </h2>

              {cartItems.map((item) => (
                <div
                  key={`${item._id}-${item.selectedSize}`}
                  className="flex justify-between mb-4"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Size: {item.selectedSize}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>₹{SHIPPING_CHARGE}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
              >
                Place Order
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;