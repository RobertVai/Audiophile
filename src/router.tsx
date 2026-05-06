import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "category/:category", element: <CategoryPage /> },
      { path: "product/:slug", element: <ProductPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
]);
