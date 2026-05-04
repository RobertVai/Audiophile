import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage/HeadphonesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "headphones", element: <HeadphonesPage /> },
    ],
  },
]);
