import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import theme from "../theme";

import MainWindowLayout from "./MainWindowLayout.jsx";

// configured to look for main-window.html
// configured in the package.json under electron-forge config
// This sets up the theme and connects to the root

const root = ReactDOM.createRoot(document.getElementById("main-window-root"));

const covenantTheme = createTheme(theme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={covenantTheme}>
      <CssBaseline />
      <MainWindowLayout />
    </ThemeProvider>
  </React.StrictMode>
);
