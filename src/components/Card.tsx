import React from "react";
import * as Icons from "heroicons-react";
import { StarWarsProduct } from "../types/interfaces";


const Card = (props: StarWarsProduct) => {
    const {  title, episodeId, releaseDate, openingCrawl, price, redirect } = props
    return (
        <div className="group flex flex-col items-center w-full cursor-pointer" onClick={redirect}>
            <div className="w-full relative">
            <img
                src="https://pngimg.com/uploads/starwars/starwars_PNG21.png"
                className="h-[400px] w-full rounded-md group-hover:opacity-30"
            />
            <Icons.PlayOutline
                width={70}
                height={70}
                className="absolute inset-0 mx-auto my-auto group-hover:visible invisible text-customYellow"
            />
            <p className="absolute top-0 right-0 p-1 bg-black rounded-sm">
                HD
            </p>
            <p className="absolute top-0 left-0 p-1 bg-slate-800 rounded-sm">
                Episode {episodeId}
            </p>
            </div>
            <p className="text-customYellow title transform group-hover:scale-150 group-hover:text-white transition duration-500 ease-in-out text-lg font-bold py-1 px-4 rounded-lg">
                {title}
            </p>
            <div className="flex justify-between w-full items-center">
            <p className="p-1 text-md">
               Released: {releaseDate?.substring(0, 4)}
            </p>
            <span className="p-1 text-center text-sm font-bold">
                Price: IDR {price}
            </span>
            </div>
            <p className="text-sm text-justify line-clamp-3 w-full mt-2">
            {openingCrawl}
            </p>
        </div>
    );
  };
  
  export default Card;
  