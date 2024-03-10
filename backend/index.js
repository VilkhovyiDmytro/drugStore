import express from "express";
import { PORT, URL_DB } from "./configure.js";
import mongoose from "mongoose";
import shopRouter from "./routes/shopRouter.js";
import orderRouter from "./routes/orderRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.route("/").get((req, res) => {
  res.status(200).json({ message: "Everething OK" });
});

app.use("/shops", shopRouter);
app.use("/orders", orderRouter);

mongoose.connect(URL_DB).then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
});
