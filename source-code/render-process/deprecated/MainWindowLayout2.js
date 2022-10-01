import React, { useEffect, useReducer, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import theme from "../theme";
import GlobalContext from "../state/GlobalContext";
import HomePage from "./HomePage.jsx";
import AuthPage from "./AuthPage.jsx";

const covenantTheme = createTheme(theme);

const initialState = {
  name: "Jimmy",
  authenticated: false,
  wallet: {}
};

function globalReducer(currentState, action) {
  switch (action.type) {
    case "authenticate-wallet":
      return { ...currentState, authenticated: true, name: action.payload.name };
    default:
      return currentState;
  }
}

function MainWindowLayout2(props) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={covenantTheme}>
          <CssBaseline />
          <GlobalContext.Provider value={[state, dispatch]}>
            <HashRouter>
              <Routes>
                <Route path="/" element={state.authenticated ? <HomePage /> : <AuthPage />} />
              </Routes>
            </HashRouter>
          </GlobalContext.Provider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default MainWindowLayout2;
