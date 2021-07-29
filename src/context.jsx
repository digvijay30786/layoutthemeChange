import React, { useState } from "react";
const CountContext = React.createContext({
  background: "white",
  color: "black"
});
export default function Context({ children }) {
  const [styleb, setStyleb] = useState({ background: "white", color: "black" });

  const value = { styleb, setStyleb };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}
export { CountContext };
