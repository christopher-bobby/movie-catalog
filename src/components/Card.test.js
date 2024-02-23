import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card"; 

const mockRedirect = jest.fn();

const testData = {
  title: "Star Wars: A New Hope",
  episodeId: "IV",
  releaseDate: "1977-05-25",
  url: "https://example.com",
  openingCrawl: "A long time ago in a galaxy far, far away...",
  price: "100000",
  redirect: mockRedirect
};

test("Clicking the card redirects", () => {
  const { getByText } = render(<Card {...testData} />);
  
  const cardElement = getByText("Star Wars: A New Hope");
  
  fireEvent.click(cardElement);
  
  expect(mockRedirect).toHaveBeenCalled();
});
