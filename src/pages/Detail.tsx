import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { filmDetail } from '../apis';


const Detail = () => {
    const { productId } = useParams();
    console.log("product id", productId, useParams())

    useEffect(()=> {
        async function getFilmDetail() {
            let res = await filmDetail(productId || '');
            console.log("detail res", res)
          }
      
          getFilmDetail();
       
    }, [])
  return (
    <div className="flex w-full space-x-2 justify-center items-center bg-white h-screen dark:invert">
      Detail Page
    </div>
  );
};

export default Detail;
