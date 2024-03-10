import mongoose from "mongoose";
const shopModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "medecine must have name"],
  },
  medecines: [
    {
      name: {
        type: String,
        required: [true, "Medecine must have name"],
      },
      Price: {
        type: Number,
        required: [true, "Medecine must have price"],
      },
    },
  ],
});

const Shop = mongoose.model("Shop", shopModel);

export default Shop;
