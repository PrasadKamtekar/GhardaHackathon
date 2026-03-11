import React, { createContext, useContext, useState } from "react";

const VisitorContext = createContext(null);

export function VisitorProvider({ children }) {
  const [visitor, setVisitor] = useState(null);

  return (
    <VisitorContext.Provider value={{ visitor, setVisitor }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const ctx = useContext(VisitorContext);
  if (!ctx) {
    throw new Error("useVisitor must be used within VisitorProvider");
  }
  return ctx;
}

