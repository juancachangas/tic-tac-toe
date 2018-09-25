import React from 'react';
import { shallow } from 'enzyme';

import { Game, mapStateToProps, mapDispatchToProps } from './Game';
import { INITIAL_STATE } from '../store/reducers/board';

describe('Game component is', () => {
  it('rendering default', () => {
    const wrapper = shallow(
      <Game status="new" restart={jest.fn()} turn="0" players={['foo', 'bar']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering winner-0', () => {
    const wrapper = shallow(
      <Game status="winner-0" restart={jest.fn()} turn="1" players={['foo', 'bar']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering winner-1', () => {
    const wrapper = shallow(
      <Game status="winner-1" restart={jest.fn()} turn="0" players={['foo', 'bar']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering draw', () => {
    const wrapper = shallow(
      <Game status="draw" restart={jest.fn()} turn="0" players={['foo', 'bar']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('rendering error', () => {
    const wrapper = shallow(
      <Game status="wrong_move" restart={jest.fn()} turn="0" players={['foo', 'bar']} />,
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
      turn: '0',
      status: 'new',
    };
    expect(mapStateToProps(state)).toMatchObject(expectedProps);
  });
});
describe('mapDispatchToProps', () => {
  it('mapDispatchToProps returns required functions', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(typeof props.restart).toBeDefined();
    expect(typeof props.restart).toEqual('function');
  });
});
