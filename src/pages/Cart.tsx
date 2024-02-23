import React, { useEffect, useState, useContext, MouseEventHandler } from "react";
import { CartContext } from "../App";


const Cart = () => {
    const [finalCart, setFinalCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
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


    useEffect(()=> {
        setFinalCart(merged);
        let priceCombined = 0;
        finalCart.forEach((cart: any)=> {
            priceCombined += (cart.count * 50000)
        });
        setTotalPrice(priceCombined)
    }, [cart, totalPrice])

    const removeItem = (index: number) => {
        let newCart = [...finalCart];
        newCart.splice(index, 1);

        let priceCombined = 0;
        newCart.forEach((cart: any)=> {
            priceCombined += (cart.count * 50000)
        });
        setTotalPrice(priceCombined)
        setFinalCart(newCart);
        setCart(newCart);
    }

    return (
        <div className="">
            Cart

            Select All

            {finalCart.map((item: any, index: number) => {
                return (
                    <div className="hover:bg-gray-100" onClick={()=>removeItem(index)} key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>{item.count}</div>
                    </div>
                )
            })}

            <div>Total: {totalPrice}</div>

        </div>
    );
};

export default Cart;
