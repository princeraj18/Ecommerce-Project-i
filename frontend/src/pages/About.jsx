// <!-- AboutUs.jsx -->
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            About <span className="text-indigo-600">ShopEase</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your one-stop destination for trendy and affordable shopping.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
              alt="About ShopEase"
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              ShopEase is an innovative eCommerce platform dedicated to
              delivering high-quality products at the best prices. We believe
              shopping should be simple, enjoyable, and accessible for everyone.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              From fashion and electronics to lifestyle essentials, ShopEase
              brings thousands of products together in one convenient place.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
                <p className="text-gray-500 mt-2">Happy Customers</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-500 mt-2">Products Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 bg-indigo-600 text-white rounded-3xl p-10 text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg leading-8">
            To make online shopping effortless, affordable, and enjoyable while
            providing customers with trusted quality and exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;