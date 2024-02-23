import React from "react";
import * as Icons from "heroicons-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full px-[24px] py-[16px] items-center justify-between flex-3">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png"
          className="lg:w-[200px] w-[100px] cursor-pointer"
          alt="Star Wars Logo"
        />
        <div className="flex lg:w-[300px]  w-[150px] justify-between">
          <a className="cursor-pointer transform hover:underline hover:text-customYellow transition duration-500 ease-in-out " onClick={() => navigate("/")}>Movies</a>
          <a className="cursor-pointer transform hover:underline hover:text-customYellow transition duration-500 ease-in-out" onClick={() => navigate("/")}>Top IMDB</a>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center cursor-pointer">
            <Icons.ShoppingBag
              className="border border-white p-1 rounded-lg "
              width={38}
              height={38}
              onClick={ ()=> navigate('/cart')}
            />
            <span className="pl-4">Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
