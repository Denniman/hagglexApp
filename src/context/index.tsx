import { useState, createContext, ReactNode } from 'react';

type ContextProps = {
  sidebar: boolean;
  handleSidebar: () => void;
  user: { token: string };
  userLogin: (data: object) => void;
  userAuth: () => void;
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

  const userLogin = (data: object) => {
    localStorage.setItem('token', JSON.stringify(data));
    setUser({ ...user, ...data });
  };

  const userAuth = () => {
    return localStorage.getItem('token');
  };

  return (
    <AppContext.Provider
      value={{
        sidebar: showSidebar,
        handleSidebar,
        user,
        userLogin,
        userAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
