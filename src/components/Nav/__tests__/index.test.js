//See the index.test.js in About for comments

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

//Render test
describe("Nav component", () => {
  //render Nav test

  // baseline test
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//Emoji Test
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    //Arrange
    const { getByLabelText } = render(<Nav />);

    //Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

//Link visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);

    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
