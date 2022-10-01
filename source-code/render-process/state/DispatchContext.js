import { createContext } from "react";

const DispatchContext = createContext();

export default DispatchContext;

// Not all components need to both read and dispatch actions
// Some are read only, some are post only
// So we seperate out the context of reading and mutating
// This is the state to read
