import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
  