import React from 'react';
import { shallow } from 'enzyme';

import InputModal, { mapStateToProps, mapDispatchToProps } from './InputModal';
import { INITIAL_STATE } from '../store/reducers/players';

describe('InputModal component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <InputModal players={[]} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering seccondPlayer', () => {
    const wrapper = shallow(
      <InputModal players={['player1']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
describe('mapStateToProps', () => {
  it('returns proper props from state', () => {
    const state = {
      players: INITIAL_STATE,
    };
    const expectedProps = {
      players: [],
    };
    expect(mapStateToProps(state)).toMatchObject(expectedProps);
  });
});
describe('mapDispatchToProps', () => {
  it('mapDispatchToProps returns required functions', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(typeof props.addPlayer).toBeDefined();
    expect(typeof props.addPlayer).toEqual('function');
  });
});
