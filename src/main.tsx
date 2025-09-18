import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
import { MsalProvider } from "@azure/msal-react";
import ErrorBoundaryWrapper from "./components/common/ErrorBoundaryWrapper.tsx";
import { msalConfig } from "@/lib/msalConfig.ts";
import { PublicClientApplication } from "@azure/msal-browser";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/store/store.ts";

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundaryWrapper>
      <Provider store={store}>
        <MsalProvider instance={msalInstance}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </I18nextProvider>
        </MsalProvider>
      </Provider>
    </ErrorBoundaryWrapper>
  </StrictMode>
);
