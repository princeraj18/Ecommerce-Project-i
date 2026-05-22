import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    image: [
      {
        type: String, // store image URLs or filenames
        required: true,
      },
    ],

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    sizes: [
      {
        type: String,
      },
    ],

    bestseller: {
      type: Boolean,
      default: false,
    },

    date: {
      type: Number, // timestamp like 1716634345448
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
