import { Cart } from '../models/cart.model';
import { deleteCart, fetchCart } from './../api/cart.api';
import {useEffect, useState } from "react";

export const useCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);
    
    const deleteCartItems = (id: number) => {
        deleteCart(id).then(() => {
            setCarts(carts.filter((cart) => cart.id !== id))
        });
    }

    useEffect(() => {
        fetchCart().then((carts) => {
            setCarts(carts);
            setIsEmpty(carts.length === 0);
        });
    },[]);

    return { carts, isEmpty, deleteCartItems };
};