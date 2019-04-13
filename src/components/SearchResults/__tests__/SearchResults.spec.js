import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchResult from "../";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
  
  it("should render 0 articles", () => {
    const wrapper = mount(<SearchResult />);
    expect(wrapper.find('li')).toHaveLength(0)
  });

  it("should render 5 articles", () => {
    const wrapper = mount(<SearchResult articles={ARTICLES_MOCK} />);
    expect(wrapper.find('li')).toHaveLength(5)
  });
});

const ARTICLES_MOCK = [
  { id: "1", webUrl: "/", webTitle: "materia 1" },
  { id: "2", webUrl: "/", webTitle: "materia 2" },
  { id: "3", webUrl: "/", webTitle: "materia 3" },
  { id: "4", webUrl: "/", webTitle: "materia 4" },
  { id: "5", webUrl: "/", webTitle: "materia 5" }
];
