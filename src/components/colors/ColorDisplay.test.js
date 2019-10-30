import React from 'react';
import { mount } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = mount(<ColorDisplay backgroundColor="white" />);
    expect(wrapper).toMatchSnapshot();
  });
});