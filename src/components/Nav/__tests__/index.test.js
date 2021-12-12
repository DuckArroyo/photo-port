//See the index.test.js in About for comments

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //render Nav test

  // baseline test
  it("renders", () => {
    render(<Nav />);
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav />);

        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
})

