import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchForm from "../";

Enzyme.configure({ adapter: new Adapter() });


describe("Search component", () => {
  it('renders', () => {
    const wrapper = mount(<SearchForm />);
    expect(wrapper.exists()).toBe(true);
  });


  it('should search input be', () => {
    const value = "flamengo"

    const wrapper = mount(<SearchForm />);
    const input = wrapper.find('input')

    input.simulate('change', {
      target: { value }
    });

    const searchValue = wrapper.find('.SearchForm__value');
    expect(searchValue.text()).toContain(`Search: ${value}`);
  });

  it('should submit a valid form', () => {
    const value = "flamengo"
    const onSearchFn = jest.fn();

    const wrapper = mount(<SearchForm onSearch={onSearchFn} />);
    wrapper.find('input').simulate('change', {
      target: { value }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    })
    expect(onSearchFn).toHaveBeenCalledWith({ value });
  });


  it('should not submit a invalid form', () => {
    const value = "flamengo"
    const onSearchFn = jest.fn();

    const wrapper = mount(<SearchForm onSearch={onSearchFn} />);

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    
    expect(onSearchFn).not.toHaveBeenCalledWith({ value });
  });

})