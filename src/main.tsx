import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
import ErrorBoundaryWrapper from "./components/common/ErrorBoundaryWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundaryWrapper>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </ErrorBoundaryWrapper>
  </StrictMode>
);
