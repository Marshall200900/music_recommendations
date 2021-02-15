import React from "react";
import { shallow } from "enzyme";
import App_footer from "./app_footer";

describe("App_footer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<App_footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
