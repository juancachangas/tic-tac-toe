import React from 'react';
import { shallow } from 'enzyme';

import Game from './Game';

describe('Game component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Game />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
