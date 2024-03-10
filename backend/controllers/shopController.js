import Shop from "../models/shopModel.js";

export const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find().select("name");

    res.status(200).json({
      status: "success",
      data: {
        shops,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const getAllMedecinesFromShop = async (req, res) => {
  try {
    const medecines = await Shop.findById(req.params.id).select("medecines");

    res.status(200).json({
      status: "success",
      data: { medecines },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
