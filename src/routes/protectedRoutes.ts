import React from "react";
import Dashboard from "../pages/Dashboard";

export const protectedRoutes = [
  {
    path: "dashboard",
    element: React.createElement(Dashboard),
  },
];
