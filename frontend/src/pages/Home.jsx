import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";



const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-between px-10 lg:px-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Discover Premium Products For Your Lifestyle
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Shop the latest Collections, Clothing and fashion products at
            unbeatable prices.
          </p>

          <div className="mt-8 flex gap-4">
            <button onClick={() => navigate("/products")} className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>

            {/* <button className="border border-white px-6 py-3 rounded-lg">
              Explore
            </button> */}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8fDA%3D"
            alt="hero"
            className="w-[500px] rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Men", "Women", "Children"].map(
            (category) => (
              <div
                key={category}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition cursor-pointer text-center"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Best Seller Products */}
      <section className="py-16 px-10 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best Seller Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(2, 6).map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <p className="text-indigo-600 font-bold mt-2">
                  {product.price}
                </p>

                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">
                  Add To Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-16 px-10 lg:px-20">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-10 text-white text-center">
          <h2 className="text-4xl font-bold">
            Summer Sale Up To 50% OFF
          </h2>

          <p className="mt-4 text-lg">
            Grab your favorite products before the offer ends.
          </p>

          <button className="mt-6 bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold">
            Shop Sale
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-10 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">🚚 Free Shipping</h3>
            <p className="text-gray-600 mt-2">
              Free shipping on all orders above ₹999.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">🔒 Secure Payments</h3>
            <p className="text-gray-600 mt-2">
              100% secure payment methods available.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="font-bold text-xl">↩ Easy Returns</h3>
            <p className="text-gray-600 mt-2">
              Hassle-free returns within 7 days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;