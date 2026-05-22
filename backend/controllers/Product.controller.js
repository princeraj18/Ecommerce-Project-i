import Product from "../models/Product.model.js";

const normalizeArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return value ? [value] : [];
    }
  }

  return [];
};

const normalizeBoolean = (value) => {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }

  return false;
};

// ---------------- CREATE PRODUCT (ADMIN) ----------------
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      images,
      stock,
      category,
      subCategory,
      subcategory,
      sizes,
      bestseller,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      stock: stock !== undefined ? Number(stock) : 0,
      image: normalizeArray(image ?? images),
      category,
      subCategory: subCategory ?? subcategory,
      sizes: normalizeArray(sizes),
      bestseller: normalizeBoolean(bestseller),
      date: Date.now(),
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- GET ALL PRODUCTS ----------------
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- GET SINGLE PRODUCT ----------------
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- UPDATE PRODUCT ----------------
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const updatedData = {
      ...req.body,
      price: req.body.price !== undefined ? Number(req.body.price) : undefined,
      stock: req.body.stock !== undefined ? Number(req.body.stock) : undefined,
      image: req.body.image ?? req.body.images,
      subCategory: req.body.subCategory ?? req.body.subcategory,
      sizes: req.body.sizes !== undefined ? normalizeArray(req.body.sizes) : undefined,
      bestseller:
        req.body.bestseller !== undefined
          ? normalizeBoolean(req.body.bestseller)
          : undefined,
    };

    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] === undefined) {
        delete updatedData[key];
      }
    });

    if (updatedData.image !== undefined) {
      updatedData.image = normalizeArray(updatedData.image);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- DELETE PRODUCT ----------------
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
