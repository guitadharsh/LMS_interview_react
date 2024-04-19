export interface CartContext {
    [key: string]: any;
}

export interface User {
    username: string,
    profilePicture: string
}

export interface GlobalDataContextProps {
    cart: CartContext;
    setCart: React.Dispatch<React.SetStateAction<CartContext>>;

    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

    loggedInUser: User | undefined;
    setLoggedInUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export interface GlobalDataProviderProps {
    children: React.ReactNode;
}