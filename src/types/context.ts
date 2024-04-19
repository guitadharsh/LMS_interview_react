export interface cartContext {
    [key: string]: any;
}

export interface GlobalDataContextProps {
    data: cartContext;
    setData: React.Dispatch<React.SetStateAction<cartContext>>;
}

export interface GlobalDataProviderProps {
    children: React.ReactNode;
}