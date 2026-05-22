import { stripe } from "../config/stripe.js";
import Payment from "../models/payment.model.js";
import Order from "../models/Order.model.js";

export const createCheckoutSession = async (
  req,
  res
) => {
  try {
    const {
      cartItems,
      total,
      userId,
      shippingData,
    } = req.body;

    const order = await Order.create({
      user: userId,

      products: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        size: item.selectedSize,
        image: item.image?.[0] || "",
      })),

      shippingAddress: shippingData,

      totalAmount: total,

      paymentMethod: "CARD",

      paymentStatus: "Pending",
    });

    const lineItems = cartItems.map(
      (item) => ({
        price_data: {
          currency: "inr",

          product_data: {
            name: item.name,
          },

          unit_amount: item.price * 100,
        },

        quantity: item.quantity,
      })
    );

    const session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],

        line_items: lineItems,

        mode: "payment",

        success_url:
          "http://localhost:5173/payment-success?session_id={CHECKOUT_SESSION_ID}",

        cancel_url:
          "http://localhost:5173/payment-cancel",
      });

    await Payment.create({
      userId,

      orderId: order._id,

      stripeSessionId: session.id,

      paymentMethod: "CARD",

      amount: total,

      paymentStatus: "Pending",
    });

    res.status(200).json({
      url: session.url,
      orderId: order._id,
    });
  } catch (error) {
    console.log(
      "CREATE SESSION ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyPayment = async (
  req,
  res
) => {
  try {
    const { sessionId } = req.body;

    const session =
      await stripe.checkout.sessions.retrieve(
        sessionId
      );

    if (
      session.payment_status === "paid"
    ) {
      const payment =
        await Payment.findOneAndUpdate(
          {
            stripeSessionId:
              session.id,
          },
          {
            paymentStatus:
              "Completed",
          },
          {
            new: true,
          }
        );

      if (payment) {
        await Order.findByIdAndUpdate(
          payment.orderId,
          {
            paymentStatus:
              "Completed",
          }
        );
      }

      return res.json({
        success: true,
      });
    }

    return res.json({
      success: false,
    });
  } catch (error) {
    console.log(
      "VERIFY PAYMENT ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};