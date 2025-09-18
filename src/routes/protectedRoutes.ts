import React from "react";
import Dashboard from "../pages/Dashboard";

export const protectedRoutes = [
  {
    path: "chat",
    element: React.createElement(Dashboard),
  },
];
