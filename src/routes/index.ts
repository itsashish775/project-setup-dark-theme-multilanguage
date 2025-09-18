import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageProvider";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import NotFound from "@/pages/404";

export const router = (() => {
  console.log("Router initialized"); // ✅ now guaranteed to log when evaluated
  return createBrowserRouter([
    {
      path: "/",
      element: React.createElement(Navigate, {
        to: "/en/login",
        replace: true,
      }),
    },
    {
      path: "*",
      element: React.createElement(NotFound),
    },
    {
      path: "/:lng",
      element: React.createElement(LanguageProvider),
      children: [
        publicRoutes,
        protectedRoutes,
        { path: "*", element: React.createElement(NotFound) }, // ✅ catch-all
      ],
    },
  ]);
})();
