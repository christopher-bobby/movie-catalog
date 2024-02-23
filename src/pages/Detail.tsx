import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from "../App";
import { filmDetail } from '../apis';
import * as Icons from "heroicons-react";
import Character from '../components/Character';
import Loading from "../components/Loading";


const Detail = () => {
    const { productId } = useParams();
    const { cart, setCart } = useContext<any>(CartContext);
    const [productDetails, setProductDetails] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=> {
        async function getFilmDetail() {
            let res = await filmDetail(productId || '');
            setIsLoading(false)
            setProductDetails(res);
        }

        getFilmDetail();

    }, [])

    const addToCart = () => {
        setCart([...cart, {id: productId, title: productDetails.title, price: 50000}])
    }


    return (
        <>
            {isLoading ? <Loading /> : (
                <div className="divide-y divide-dashed">
                    <div className="p-6 flex">
                        <div>
                        <img
                            src="https://www.originalfilmart.com/cdn/shop/products/Star_wars_last_jedi_2017_advance_intl_original_film_art_a.jpg?v=1551894963"
                            className="h-[500px] rounded-md flex-shrink-0"
                        />
                        </div>
                        <div className="flex flex-col px-12 max-w-3xl">
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
                            <span className="font-bold">Price:</span> IDR 123.000
                            </p>
                            <button
                            onClick={addToCart}
                    className="flex gap-1 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
                    >
                    <Icons.ShoppingBag />
                    Add to Cart
                    </button>
                        </div>

                    
                        </div>
                        <div className="video-responsive">
                        <p className="text-3xl mb-4">Watch the Trailer</p>
                        <iframe
                            width="315"
                            height="180"
                            src="https://www.youtube.com/embed/sGbxmsDFVnE?si=ezIIb2yISO3BofI0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        </div>
                    </div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl font-bold">Characters</p>
                        <div className="grid grid-cols-7 items-center mt-6 gap-6">
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
