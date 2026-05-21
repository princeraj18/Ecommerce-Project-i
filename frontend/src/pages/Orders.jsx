import React from "react";
import { products } from "../assets/frontend_assets/assets";

const Orders = () => {

  const orders = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        <div className="space-y-5">

          {orders.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row gap-5 items-center"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Size: M
                </p>

                <p className="font-bold text-indigo-600 mt-2">
                  ₹{item.price}
                </p>
              </div>

              <div>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  Delivered
                </span>
              </div>

              <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-600 hover:text-white">
                Track Order
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Orders;