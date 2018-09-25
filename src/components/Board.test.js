import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

describe('Board component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Board />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
