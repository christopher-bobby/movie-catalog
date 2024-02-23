import React from "react";
import * as Icons from "heroicons-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header flex bg-black-800 w-full px-[24px] py-[16px] items-center justify-between flex-3">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png"
          className="w-[7%] cursor-pointer"
          alt="Star Wars Logo"
        />
        <div className="grid grid-cols-4 gap-20">
          <p className="text-white cursor-pointer" onClick={() => navigate("/")}>Movies</p>
          <p className="text-white cursor-pointer" onClick={() => navigate("/")}>Top IMDB</p>
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
