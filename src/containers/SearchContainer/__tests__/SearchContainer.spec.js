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

    expect(wrapper.state().articles).toHaveLength(0);

    const { onSearch } = wrapper.find(SearchForm).props();
    return onSearch({ values: 1 }).then(() => {
      expect(wrapper.state().articles).toHaveLength(10);
    });
  });
});
