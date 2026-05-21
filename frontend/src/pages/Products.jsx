import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [sortPrice, setSortPrice] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search using Regex
    if (search.trim()) {
      const regex = new RegExp(search, "i");

      filtered = filtered.filter(
        (product) =>
          regex.test(product.name) ||
          regex.test(product.category) ||
          regex.test(product.subCategory)
      );
    }

    // Category Filter
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // SubCategory Filter
    if (subCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.subCategory === subCategory
      );
    }

    // Price Sorting
    if (sortPrice === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortPrice === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, category, subCategory, sortPrice]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8">
          All Products
        </h1>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="border rounded-lg px-4 py-3"
            >
              <option value="All">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>

            {/* Sub Category */}
            <select
              value={subCategory}
              onChange={(e) =>
                setSubCategory(e.target.value)
              }
              className="border rounded-lg px-4 py-3"
            >
              <option value="All">
                All Sub Categories
              </option>
              <option value="Topwear">
                Topwear
              </option>
              <option value="Bottomwear">
                Bottomwear
              </option>
              <option value="Winterwear">
                Winterwear
              </option>
            </select>

            {/* Price Sort */}
            <select
              value={sortPrice}
              onChange={(e) =>
                setSortPrice(e.target.value)
              }
              className="border rounded-lg px-4 py-3"
            >
              <option value="">
                Sort By Price
              </option>
              <option value="low-high">
                Low → High
              </option>
              <option value="high-low">
                High → Low
              </option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Link
              key={item._id}
              to={`/products/${item._id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                  {item.category}
                </span>

                <h3 className="font-semibold text-gray-800 mt-3 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.subCategory}
                </p>

                <p className="text-indigo-600 font-bold text-lg mt-3">
                  ₹{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;