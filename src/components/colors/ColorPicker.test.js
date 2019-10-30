import React from 'react';
import { mount } from 'enzyme';
import ColorPicker from './ColorPicker';

const colors = ['red', 'green', 'black', 'yellow']


describe('ColorPicker component', () => {
  it('renders ColorPicker', () => {
    const wrapper = mount(<ColorPicker
      selectColor={() => {}}
      colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});