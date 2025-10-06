import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("Data.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path:"/bookDetails/:id",
        loader: () => fetch("./Data.json"),
        Component:BookDetails
      },
    ],
  },
]);
