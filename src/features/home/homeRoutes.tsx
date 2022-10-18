import React from "react";

import PageLayoutHoc from "../../hocs/PageLayoutHoc";
import { TRouteTypes } from "../../types/index";
import Home from "./container/Home";

export const homeRoutes: TRouteTypes[] = [
    {
        path: "/",
        element: <Home />,
        key: "home",
    },
];
