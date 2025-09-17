// LanguageProvider.tsx
import React, { createContext, useContext,  useEffect } from "react";
import type { ReactNode } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ---------------- Context ----------------
interface LanguageContextType {
  changeLanguage: (lng: string) => void;
  language: string;
}

const LanguageContext = createContext<LanguageContextType>({
  changeLanguage: () => {},
  language: "en",
});

export const useLanguage = () => useContext(LanguageContext);

// ---------------- Provider ----------------
interface Props {
  children?: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const { lng } = useParams<{ lng: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const language = lng || i18n.resolvedLanguage || "en";

  // Keep i18n in sync with URL
  useEffect(() => {
    if (lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Function to switch language (updates URL + i18n)
  const changeLanguage = (newLng: string) => {
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, "");
    navigate(`/${newLng}${currentPath}`);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {/* Outlet renders all nested child routes */}
      <Outlet />
      {children} {/* optional, usually not needed */}
    </LanguageContext.Provider>
  );
};
