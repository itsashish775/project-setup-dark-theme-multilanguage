// components/PublicOnly.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetProfileQuery } from "@/ReduxStore/reducers/auth/auth.api";
import { useTranslation } from "react-i18next";

export const PublicOnly: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, error, isLoading, isFetching } = useGetProfileQuery(undefined, {
    skip: false, // don't skip – let it always try
  });

  // While checking profile, show loader (avoid flicker)
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  // ✅ If profile exists, user is authenticated → redirect
  if (data && !error) {
    return <Navigate to={`/${i18n.language}/chat`} replace />;
  }

  // ❌ If error (401/403), user is not authenticated → allow public pages
  return <Outlet />;
};
