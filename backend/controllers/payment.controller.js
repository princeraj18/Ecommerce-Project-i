import Payment from "../models/Payment.model.js";

// ---------------- CREATE PAYMENT ----------------
export const createPayment = async (req, res) => {
  try {
    const {
      orderId,
      paymentMethod,
      amount,
      transactionId,
    } = req.body;

    const payment = await Payment.create({
      userId: req.user.id,
      orderId,
      paymentMethod,
      amount,
      transactionId,
      paymentStatus: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Payment created successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- GET USER PAYMENTS ----------------
export const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      userId: req.user.id,
    }).populate("orderId");

    res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- GET SINGLE PAYMENT ----------------
export const getSinglePayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("userId", "name email")
      .populate("orderId");

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- UPDATE PAYMENT STATUS ----------------
export const updatePaymentStatus = async (req, res) => {
  try {
    const { paymentStatus } = req.body;

    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    payment.paymentStatus = paymentStatus;

    if (paymentStatus === "success") {
      payment.paidAt = Date.now();
    }

    await payment.save();

    res.status(200).json({
      success: true,
      message: "Payment status updated",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};