import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    console.log(order);

    res.status(201).json({
      status: "success",
      data: { order },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
