import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../App";


const Cart = () => {
    const { cart, setCart } = useContext<any>(CartContext);
    const merged = cart.reduce((acc: any, obj: any) => {
        const found = acc.find((item:any) => item.id === obj.id);
        if (found) {
            found.count++;
        } else {
            acc.push({ ...obj, count: 1 });
        }
        return acc;
    }, []);
    return (
        <div className="character-card flex items-center">
            Cart

            Select All

            {merged.map((item: any, index: any) => {
                return (
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>{item.count}</div>
                    </div>
                )
            })}

        </div>
    );
};

export default Cart;
