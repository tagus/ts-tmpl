import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

describe('rendering Hello', () => {
  it('renders feed as expected', () => {
    const hello = shallow(<Hello name="Dwight Schrute" />);
    expect(hello).toMatchSnapshot();
  });
});

