import React from "react";
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
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/Data.json"); 
          return res.json(); // ✅ সরাসরি array return হচ্ছে
        },
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "bookDetails/:id",
        loader: async () => {
          const res = await fetch("/Data.json");
          return res.json(); // ✅ array return
        },
        Component: BookDetails,
      },
    ],
  },
]);
