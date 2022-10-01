import React, { useEffect, useContext } from "react";
import StateContext from "../state/StateContext";

function HomePage(props) {
  const state = useContext(StateContext);
  return (
    <>
      <h2>Name: {state.name}</h2>
    </>
  );
}

export default HomePage;
