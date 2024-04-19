import React, { createContext, useState, useContext } from 'react';
import { GlobalDataContextProps, GlobalDataProviderProps, CartContext, User } from '../types'

const GlobalDataContext = createContext<GlobalDataContextProps | undefined>(undefined);

const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<User | undefined>(undefined);
    const [cart, setCart] = useState<CartContext>([]);

    const contextValue: GlobalDataContextProps = {
        isLoggedIn,
        setIsLoggedIn,

        loggedInUser,
        setLoggedInUser,

        cart,
        setCart,
    }

    return <GlobalDataContext.Provider value={contextValue}>{children}</GlobalDataContext.Provider>
}

const useGlobalData = () => {
    const context = useContext(GlobalDataContext);
    if (!context) {
        throw new Error('Global data context must be used within a provider');
    }
    return context;
}

export { GlobalDataProvider, useGlobalData }
