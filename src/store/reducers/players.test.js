
import { players, INITIAL_STATE } from './players';
import { ADD_PLAYER } from '../actions/players';

describe('players reducer', () => {
  it('works on initial state for unknown actions', () => {
    expect(players(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('Set properly player', () => {
    const action = {
      type: ADD_PLAYER,
      payload: {
        player: 'juan',
      },
    };
    const nextState = ['juan'];
    expect(players(INITIAL_STATE, action)).toMatchObject(nextState);
  });
  it('keep maximum 2 players', () => {
    const prevState = ['juan', 'carlos'];
    const action = {
      type: ADD_PLAYER,
      payload: {
        player: 'jose',
      },
    };
    expect(players(prevState, action)).toMatchObject(prevState);
  });
});
