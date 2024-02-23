import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

test("Loading component renders correctly", () => {
  const { getByText } = render(<Loading />);
  const loadingText = getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
  
});
