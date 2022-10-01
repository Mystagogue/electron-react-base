import React, { useState, useReducer, useEffect, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AuthPage from "./AuthPage.jsx";
import StateContext from "../state/StateContext";

function MainWindowRouter(props) {
  const state = useContext(StateContext);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={state.authenticated ? <HomePage /> : <AuthPage />} />
      </Routes>
    </HashRouter>
  );
}

export default MainWindowRouter;
