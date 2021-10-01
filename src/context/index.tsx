import { useState, createContext, ReactNode } from 'react';

type SideBarToggleProp = {
  sidebar: boolean;
  handleSidebar: () => void;
};

interface PropType {
  children: ReactNode;
}

export const SidebarContext = createContext<SideBarToggleProp | null>(null);

const SideBarContextProvider: React.FC<PropType> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SidebarContext.Provider value={{ sidebar: showSidebar, handleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarContextProvider;
