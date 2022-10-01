import React, { useState, useReducer, useEffect } from "react";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

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

function GlobalState(props) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default GlobalState;

// This component sets up the global state,
// this needs to wrap everything, including the routing
