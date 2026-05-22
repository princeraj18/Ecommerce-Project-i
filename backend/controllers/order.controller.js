// const Order = require("../models/order.model");
import Order from "../models/Order.model.js";

// import Order from "../models/order.model.js";

const createOrder = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const {
      userId,
      cartItems,
      shippingData,
      total,
      paymentMethod,
      paymentStatus,
    } = req.body;

    console.log("cartItems:", cartItems);
    console.log("shippingData:", shippingData);

    const formattedProducts = cartItems.map((item) => ({
  name: item.name,
  price: item.price,
  quantity: item.quantity,
  size: item.selectedSize,
}));

const order = await Order.create({
  user: userId,
  products: formattedProducts,
  shippingAddress: shippingData,
  totalAmount: total,
  paymentMethod,
  paymentStatus,
});

    res.status(201).json(order);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createOrder, getAllOrders, getSingleOrder };