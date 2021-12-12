import React from "react";

//Import the react testing library
// render virtually simulates the DOM in a Node.js environment
// cleanup removes components from the DOM to prevent memory leaking
import { render, cleanup } from "@testing-library/react";

//Import the jest-dom package
import "@testing-library/jest-dom/extend-expect";

//Import the About component
import About from "..";

//Configure testing environment

//calls the cleanup function with global function
afterEach(cleanup);

//declares the component we are testing
describe("About component", () => {
  //renders About test

  //1st test
  it("renders", () => {
    render(<About />);
  });

  //2nd test
  it('matches snapshot DOM node structure', () => {
      //render About
      //asFragment returns a snapshot of the About component
      const { asFragment } = render(<About />);
      //expect and match methods to compare
      expect(asFragment()).toMatchSnapshot();
  })
});
