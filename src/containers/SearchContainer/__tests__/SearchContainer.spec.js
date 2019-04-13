import React from "react";
import { act } from "react-dom/test-utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchContainer from "../";
import SearchForm from "../../../components/SearchForm";

jest.mock("../../../api");

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
  it("should render 5 articles", () => {
    let wrapper;

    wrapper = mount(<SearchContainer />);

    wrapper.find("input").simulate("change", {
      target: { value: "value" }
    });



  });
});
