import React from 'react';

export const GlobalContexts = React.createContext();

export const SidebarState = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState(false);

  return (
    <GlobalContexts.Provider value={{ sidebarState, setSidebarState }}>
      {children}
    </GlobalContexts.Provider>
  );
};
