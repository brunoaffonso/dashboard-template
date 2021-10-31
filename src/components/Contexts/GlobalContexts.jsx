import React from 'react';

export const GlobalContexts = React.createContext();

export const SidebarState = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <GlobalContexts.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </GlobalContexts.Provider>
  );
};
