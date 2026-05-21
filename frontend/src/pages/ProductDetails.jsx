import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] =useState("");

  const product = products.find(
    (item) => item._id === id
  );

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart(product, selectedSize);

    alert("Added To Cart");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image[0]}
          alt=""
          className="rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl text-indigo-600 mt-4">
            ₹{product.price}
          </p>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">
              Select Size
            </h3>

            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(size)
                  }
                  className={`px-4 py-2 border rounded-lg
                  ${
                    selectedSize === size
                      ? "bg-indigo-600 text-white"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg"
          >
            Add To Cart
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;