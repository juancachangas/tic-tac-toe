import { ADD_PLAYER, addPlayer } from './players';

describe('Players action', () => {
  it('fires action properly to add new player', () => {
    const action = {
      type: ADD_PLAYER,
      payload: {
        player: 'juan',
      },
    };
    expect(addPlayer('juan')).toMatchObject(action);
  });
});
