import React from "react";
import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { RequireAuth } from "@/components/Auth/RequireAuth";

export const protectedRoutes: RouteObject = {
  element: React.createElement(RequireAuth), // 👈 wrapper
  children: [
    {
      path: "chat",
      element: React.createElement(Dashboard),
    },
  ],
};
