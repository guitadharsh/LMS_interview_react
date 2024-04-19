import React, { createContext, useState, useContext } from 'react';
import { GlobalDataContextProps, GlobalDataProviderProps, cartContext } from '../types'

const GlobalDataContext = createContext<GlobalDataContextProps | undefined>(undefined);

const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({ children }) => {
    const [data, setData] = useState<cartContext>({});

    const contextValue: GlobalDataContextProps = {
        data,
        setData
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
