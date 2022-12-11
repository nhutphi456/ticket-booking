import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("../pages/home")) as any;

const routes: RouteObject[] = [
    {
        path: '/',
        element: ''
    }
]

export default routes;
