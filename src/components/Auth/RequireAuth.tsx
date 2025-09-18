// components/RequireAuth.tsx
import { useGetProfileQuery } from "@/ReduxStore/reducers/auth/auth.api";
import React from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, error, isLoading, isFetching } = useGetProfileQuery();
  const location = useLocation();
  console.log({ data, error, isLoading, isFetching });

  // Show a loader while checking authentication
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  // ❌ If no profile (error 401/403), redirect to login
  if (error || !data) {
    console.log(
      "User not authenticated, redirecting to login...",
      `/${i18n.language}/login`
    );
    return (
      <Navigate
        to={`/${i18n.language}/login`}
        state={{ from: location }}
        replace
      />
    );
  }

  // ✅ Authenticated → render child routes
  return <Outlet />;
};
