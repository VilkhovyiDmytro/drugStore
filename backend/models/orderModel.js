import mongoose from "mongoose";

const orderModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  order: {
    type: [
      {
        shopId: {
          type: mongoose.Schema.ObjectId,
          ref: "Shop",
          required: [true, "medecine must have shop id!"],
        },
        // medecine: {
        name: {
          type: "String",
          required: [true, "Provide name of medecine"],
        },
        price: {
          type: Number,
          required: [true, "procide price for one medecine"],
        },
        quantity: {
          type: Number,
          required: [true, "Please procide quantity of products"],
        },
        // },
      },
    ],
    required: [true, "Order must contaion at least one item"],
  },
});

const Order = mongoose.model("Order", orderModel);

export default Order;
