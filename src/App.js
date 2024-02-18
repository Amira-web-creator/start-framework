import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portofolio from "./Components/Portofolio/Portofolio";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/Not-found/Not-found";


let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <About /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },


    ],
  },
]);
export default function App() {
  return<RouterProvider router={routers}></RouterProvider>
}
