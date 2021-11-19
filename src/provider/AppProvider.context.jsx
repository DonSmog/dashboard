import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [images, setImages] = useState([]);
  return (
    <AppContext.Provider
      value={{
        images,
        setImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
