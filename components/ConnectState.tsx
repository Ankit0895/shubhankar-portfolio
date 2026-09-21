"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ConnectState = {
  active: boolean;
  toggle: () => void;
};

const ConnectContext = createContext<ConnectState | null>(null);

export function ConnectProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  return (
    <ConnectContext.Provider value={{ active, toggle: () => setActive((a) => !a) }}>
      {children}
    </ConnectContext.Provider>
  );
}

export function useConnectState() {
  const ctx = useContext(ConnectContext);
  if (!ctx) throw new Error("useConnectState must be used within ConnectProvider");
  return ctx;
}
