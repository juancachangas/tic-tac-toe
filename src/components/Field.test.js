import React from 'react';
import { shallow } from 'enzyme';

import { Field, mapStateToProps, mapDispatchToProps } from './Field';
import { INITIAL_STATE } from '../store/reducers/board';

describe('Field component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Field id="1" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 0 move', () => {
    const wrapper = shallow(
      <Field id="1" field="0" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering player 1 move', () => {
    const wrapper = shallow(
      <Field id="1" field="1" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('not rendering player move made by other players', () => {
    const wrapper = shallow(
      <Field id="1" field="2" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
describe('mapStateToProps', () => {
  it('returns proper props from state', () => {
    const state = {
      board: INITIAL_STATE,
    };
    const expectedProps = {
      fields: [null, null, null,
        null, null, null,
        null, null, null,
      ],
      turn: '0',
      status: 'new',
      field: null,
    };
    expect(mapStateToProps(state, { id: 1 })).toMatchObject(expectedProps);
  });
});
describe('mapDispatchToProps', () => {
  it('mapDispatchToProps returns required functions', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(typeof props.setMove).toBeDefined();
    expect(typeof props.setMove).toEqual('function');

    expect(typeof props.checkWinner).toBeDefined();
    expect(typeof props.checkWinner).toEqual('function');
  });
});
