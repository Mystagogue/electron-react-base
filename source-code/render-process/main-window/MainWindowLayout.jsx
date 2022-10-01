import React, { useEffect } from "react";

import GlobalState from "../state/GlobalState.jsx";
import MainWindowRouter from "./MainWindowRouter.jsx";

function MainWindowLayout() {
  return (
    <>
      <GlobalState>
        <MainWindowRouter />
      </GlobalState>
    </>
  );
}

export default MainWindowLayout;
