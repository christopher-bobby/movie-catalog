import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Detail from "./Detail";


describe('Detail page test', ()=> {
    const renderWithRouter = (children) =>
    render(
        <MemoryRouter initialEntries={['/detail/1']}>
            {children}
        </MemoryRouter>
    );
    test("Component renders correctly", () => {
        const { getByText } = renderWithRouter(<Detail />);
        const loading = getByText("Loading...");
        expect(loading).toBeInTheDocument();
    });
})
