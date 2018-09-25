import React from 'react';
import { shallow } from 'enzyme';

import Field from './Field';

describe('Field component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Field id="1" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 0 move', () => {
    const wrapper = shallow(
      <Field id="1" checkedBy="0" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 1 move', () => {
    const wrapper = shallow(
      <Field id="1" checkedBy="1" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('not rendering player move made by other players', () => {
    const wrapper = shallow(
      <Field id="1" checkedBy="2" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
