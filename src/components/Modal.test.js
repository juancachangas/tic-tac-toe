import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('Modal component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Modal status="new" names={['juan', 'camilo']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 1 winner message', () => {
    const wrapper = shallow(
      <Modal status="winner-0" names={['juan', 'camilo']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 2 winner message', () => {
    const wrapper = shallow(
      <Modal status="winner-1" names={['juan', 'camilo']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering draw message', () => {
    const wrapper = shallow(
      <Modal status="draw" names={['juan', 'camilo']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering error message', () => {
    const wrapper = shallow(
      <Modal status="wrong_move" names={['juan', 'camilo']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
