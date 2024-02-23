import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../App";


const Cart = () => {
    const [finalCart, setFinalCart] = useState([]);
    const { cart, setCart, totalPrice, setTotalPrice } = useContext<any>(CartContext);

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
    }, [cart])

    const removeItem = (index: number, count: number) => {
        let newCart = [...finalCart];
        newCart.splice(index, 1);
        setFinalCart(newCart);
        setCart(newCart);
        let totalRemovedPrice = count * 50000;
        setTotalPrice(()=> totalPrice - totalRemovedPrice)
    }

    const removeAllItems = () => {
        setCart([]);
        setTotalPrice(0);
    }

    return (
        <div className="bg-black-800 w-full px-[24px] py-[16px] items-center justify-between flex-3">
            <h1 className="text-5xl font-bold">Cart</h1>
            <div className="text-left">
                <div className="flex justify-between">
                    <div className="w-1/3 p-4">
                        <span className="font-bold">Title</span>
                    </div>
                    <div className="w-1/3 p-4">
                        <span className="font-bold">Price</span>
                    </div>
                    <div className="w-1/3 p-4">
                        <span className="font-bold">Total Item</span>
                    </div>
                </div>
                {finalCart.map((item: any, index: number) => {
                    return (
                        <div key={item.id} className="border border-customYellow rounded-md mb-8">
                            <div className="flex justify-between">
                                <div className="w-1/3 p-4">
                                    <span>{item.title}</span>
                                </div>
                                <div className="w-1/3 p-4">
                                    <span>Rp {item.price}</span>
                                </div>
                                <div className="w-1/3 p-4">
                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div onClick={()=>removeItem(index, item.count)} className="cursor-pointer pl-4 font-bold pb-4 opacity-100">Delete item</div>
                        </div>
                    )
                })}
                <div className="text-lg mt-6 pl-4">Total: <span className="text-2xl font-bold pl-4">IDR {totalPrice}</span></div>
                <div onClick={removeAllItems} className="text-lg mt-4 cursor-pointer pl-4">Delete All</div>
            </div>
        </div>
    );
};

export default Cart;
