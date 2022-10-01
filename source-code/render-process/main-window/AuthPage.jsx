import React, { useEffect, useContext } from "react";

import DispatchContext from "../state/DispatchContext";

function AuthPage() {
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <button onClick={() => dispatch({ type: "authenticate-wallet", payload: { name: "fred" } })}>Log In</button>
    </>
  );
}

export default AuthPage;
