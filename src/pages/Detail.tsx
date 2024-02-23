import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from "../App";
import { filmDetail } from '../apis';
import * as Icons from "heroicons-react";
import Character from '../components/Character';
import Loading from "../components/Loading";


const Detail = () => {
    const { productId } = useParams();
    const { cart, setCart, setTotalPrice } = useContext<any>(CartContext);
    const [productDetails, setProductDetails] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [showAddedMessage, setShowAddedMessage] = useState<boolean>(false);

    useEffect(()=> {
        async function getFilmDetail() {
            let res = await filmDetail(productId || '');
            setIsLoading(false)
            setProductDetails(res);
        }

        getFilmDetail();

    }, []);

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            setShowAddedMessage(false);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    },[showAddedMessage])

    const addToCart = () => {
        setCart([...cart, {id: productId, title: productDetails.title, price: 50000}]);
        setTotalPrice((prev: number)=> prev + 50000);
        setShowAddedMessage(true);
    }


    return (
        <>
            {isLoading ? <Loading /> : (
                <div className="divide-x divide-dashed flex lg:flex-row flex-col">
                    <div className="p-8 lg:w-2/3 md:flex">
                        <img
                            src="https://www.originalfilmart.com/cdn/shop/products/Star_wars_last_jedi_2017_advance_intl_original_film_art_a.jpg?v=1551894963"
                            className="h-[500px] md:pr-8 s:mb-4"
                        />
                        <div className="flex flex-col lg:px-12 max-w-4xl">
                            <p className="text-5xl">{productDetails?.title}</p>
                            <p className="text-lg mt-6  text-justify">
                                {productDetails?.opening_crawl}
                            </p>
                            <div className="flex justify-between mt-12">
                                <p>
                                    <span className="font-bold">Language</span>: English
                                </p>
                                <p>
                                    <span className="font-bold">Quality:</span> HD
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p>
                                    <span className="font-bold">Director:</span> {productDetails?.director}
                                </p>
                                <p>
                                    <span className="font-bold">Language:</span> English
                                </p>
                            </div>
                        <div className="flex justify-between mt-4">
                            <p>
                                <span className="font-bold">Producer:</span> {productDetails?.producer}
                            </p>
                            <p>
                                <span className="font-bold">Price:</span> IDR 50.000
                            </p>
                            <button onClick={addToCart}
                                className="flex gap-1 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
                            >
                                <Icons.ShoppingBag />
                                Add to Cart
                            </button>
                        </div>
                        {showAddedMessage && <div className="text-right">Item added to cart</div>}
                    </div>
                </div>
                <div className="lg:w-1/3 p-6">
                    <p className="text-xl font-bold mb-4">Characters</p>
                    <div className="">
                        {productDetails?.characters?.map((data: any, index: any) => {
                            return <Character key={index} characterUrl={data} />;
                        })}
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default Detail;
