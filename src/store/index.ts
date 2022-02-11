import { createContext, useContext } from "react";

import { Store } from "./store";

const context = createContext(new Store());

export function useStore() {
  return useContext(context);
}
