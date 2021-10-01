import { useState, createContext, ReactNode } from 'react';

type ContextProps = {
  sidebar: boolean;
  handleSidebar: () => void;
  user: { token: string };
  handleUserAuth: (data: object) => void;
};

interface PropType {
  children: ReactNode;
}

export const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<PropType> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({ token: '' });

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleUserAuth = (data: object) => setUser({ ...user, ...data });

  return (
    <AppContext.Provider
      value={{ sidebar: showSidebar, handleSidebar, user, handleUserAuth }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
