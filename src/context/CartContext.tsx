import React, { createContext, useState, useContext } from 'react';
import { CartProviderProps, CartProps, CartArray } from '../types';

const CartContext = createContext<CartProps | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartArray[]>([])

    const contextValue: CartProps = {
        cart,
        setCart
    }

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('cart context must be used within a cart provider');
    }
    return context;
}

export { CartProvider, useCart}





