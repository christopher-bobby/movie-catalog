import React from "react";
import { render } from "@testing-library/react";
import Character from "./Character";

describe("Character", () => {
    test("Test not working API", async () => {
        const characterUrl = "";
        const { getByText } = render(<Character characterUrl={characterUrl} />);
        const characterGender = getByText("Actress");
        expect(characterGender).toBeInTheDocument();
    });
});
