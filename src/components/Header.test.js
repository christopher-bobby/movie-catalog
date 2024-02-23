import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Header from "./Header";

describe('Header', () => {

    const renderWithRouter = (children) =>
    render(<MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>);
    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"), // Use actual implementations for other exports
        useNavigate: () => jest.fn() // Mock useNavigate hook
    }));
      
    test("Header component renders correctly", () => {
        const { getByText } = renderWithRouter(<Header />);
        const moviesText = getByText("Movies");
        const topText = getByText("Top IMDB");

        expect(moviesText).toBeInTheDocument();
        expect(topText).toBeInTheDocument();
    });
});
