import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Cart from "./Cart";
import { CartContext } from "../App";


describe('Cart page tests', ()=> {
    const renderWithRouter = (children) =>
    render(
        <MemoryRouter initialEntries={['/']}>
            <CartContext.Provider
                value={{
                    cart:[{title: "The last jedi", price: 50000, count: 1}],
                    setCart: jest.fn(),
                     totalPrice: 50000,
                    setTotalPrice: jest.fn()
                }}
            >
                {children}
          </CartContext.Provider>
        </MemoryRouter>
    );
    test("Component renders correctly", () => {
        const { getByText } = renderWithRouter(<Cart />);
        const titleText = getByText("Title");
        const priceText = getByText("Price");
        const totalItemText = getByText("Total Item");
        const deleteAllText = getByText("Delete All");
        const totalPrice = getByText("IDR 50000");
        const filmTitle = getByText("The last jedi");


        expect(titleText).toBeInTheDocument();
        expect(priceText).toBeInTheDocument();
        expect(totalItemText).toBeInTheDocument();
        expect(deleteAllText).toBeInTheDocument();
        expect(totalPrice).toBeInTheDocument();
        expect(filmTitle).toBeInTheDocument();
    });
})
