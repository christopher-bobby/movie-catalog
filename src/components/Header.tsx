import React, { useState } from "react";
import * as Icons from "heroicons-react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="header flex bg-black-800 w-full px-[24px] py-[16px] items-center justify-between flex-3">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png"
          className="w-[7%] cursor-pointer"
        />
        <div className="grid grid-cols-4 gap-20">
          <p className="text-white">Title</p>
          <p className="text-white">Movies</p>
          <p className="text-white">Top IMDB</p>
          <p className="text-white">Other</p>
        </div>
        <div className="flex gap-4 items-center">
          
          <Icons.ShoppingBag
            className="border border-white p-1 rounded-lg cursor-pointer"
            width={38}
            height={38}
            onClick={ ()=> navigate('/cart')}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
