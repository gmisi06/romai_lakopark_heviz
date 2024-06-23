import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Home from "./components/Home.jsx";
import Gallery from "./components/Gallery.jsx";
import Prices from "./components/Prices.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/galeria",
        element: <Gallery />,
      },
      {
        path: "/araink",
        element: <Prices />,
      },
      {
        path: "/kapcsolat",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
