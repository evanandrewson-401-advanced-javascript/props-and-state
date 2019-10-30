import React from 'react';
import { mount } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor component', () => {
  it('renders RandomColor', () => {
    const wrapper = mount(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});