import React from 'react';
import { mount } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer component', () => {
  it('renders ColorContainer', () => {
    const wrapper = mount(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});