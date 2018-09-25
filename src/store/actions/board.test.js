import {
  setMove, SET_MOVE, SET_STATUS, checkWinner, SET_NEW_GAME, restartBoard,
} from './board';
import store from '../index';

jest.mock('../index');
describe('Board actions', () => {
  it('dispatch correctly set move', () => {
    const action = {
      type: SET_MOVE,
      payload: {
        position: 1,
      },
    };
    expect(setMove(1)).toMatchObject(action);
  });

  it('dispatch correctly status winner 1', () => {
    store.getState.mockReturnValue({
      board: {
        fields: ['0', '0', '1',
          null, '0', '1',
          null, null, '1',
        ],
        turn: '1',
        status: 'playing',
      },
    });
    const action = {
      type: SET_STATUS,
      payload: {
        status: 'winner-1',
      },
    };
    expect(checkWinner()).toMatchObject(action);
  });

  it('dispatch correctly status winner 0', () => {
    store.getState.mockReturnValue({
      board: {
        fields: ['0', '0', '0',
          null, '1', '1',
          null, null, null,
        ],
        turn: '1',
        status: 'playing',
      },
    });
    const action = {
      type: SET_STATUS,
      payload: {
        status: 'winner-0',
      },
    };
    expect(checkWinner()).toMatchObject(action);
  });

  it('dispatch correctly status draw', () => {
    store.getState.mockReturnValue({
      board: {
        fields: ['0', '0', '1',
          '1', '1', '0',
          '0', '1', '0',
        ],
        turn: '1',
        status: 'playing',
      },
    });
    const action = {
      type: SET_STATUS,
      payload: {
        status: 'draw',
      },
    };
    expect(checkWinner()).toMatchObject(action);
  });
  it('dispatch correctly restart game', () => {
    const action = {
      type: SET_NEW_GAME,
    };
    expect(restartBoard()).toMatchObject(action);
  });
});
