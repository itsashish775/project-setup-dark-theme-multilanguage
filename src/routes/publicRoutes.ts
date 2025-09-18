import React from "react";
import type { RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import { PublicOnly } from "@/components/Auth/PublicOnly";

export const publicRoutes: RouteObject = {
  element: React.createElement(PublicOnly), // 👈 wrapper
  children: [
    {
      path: "login",
      element: React.createElement(Login),
    },
    // You can add register, forgot-password, etc. here
  ],
};
