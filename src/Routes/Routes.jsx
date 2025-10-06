import React, { Component } from 'react';
import { createBrowserRouter,
 } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
              index:true,
              path:"/",
              Component:Home,
        },
    ]
  },
]);