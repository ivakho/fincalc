import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { App, AppProviders } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/fincalc">
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>,
);
