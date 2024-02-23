import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Home from "./Home";

describe('Home page tests', ()=> {
    const renderWithRouter = (children) =>
    render(<MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>);
    test("Loading component renders correctly", () => {
        const { getByText } = renderWithRouter(<Home />);
        const loadingText = getByText("Loading...");
        expect(loadingText).toBeInTheDocument();
    });
})
