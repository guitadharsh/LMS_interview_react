export interface CartProviderProps {
    children: React.ReactNode;
}

export interface CartArray {
    id: string,
    courseName: string,
    price: number;
}

export interface CartProps {
    cart: CartArray[]
    setCart: React.Dispatch<React.SetStateAction<CartArray[]>>;
}
