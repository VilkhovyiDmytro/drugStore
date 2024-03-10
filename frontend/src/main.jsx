import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage.jsx";
import ShopPage from "./routes/ShopPage.jsx";
import OrderPage from "./routes/OrderPage.jsx";
import { loader as mainLoader, medecinesLoader } from "./routes/root.js";
import { postOrder } from "./helpers/api.js";
import Layout from "./components/Layout.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: mainLoader,
    children: [
      {
        path: "/",
        index: true,
        element: <MainPage />,
        loader: mainLoader,
      },
      {
        path: "/:id",
        element: <ShopPage />,
        loader: medecinesLoader,
      },
      {
        path: "/orders",
        element: <OrderPage />,
        action: postOrder,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
