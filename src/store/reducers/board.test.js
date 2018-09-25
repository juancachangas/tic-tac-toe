import { board, INITIAL_STATE, checkWinner } from './board';
import { SET_MOVE, SET_NEW_GAME, SET_STATUS } from '../actions/board';

describe('board reducer', () => {
  it('works on initial state for unknown actions', () => {
    expect(board(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('Set properly player moves', () => {
    const action = {
      type: SET_MOVE,
      payload: {
        position: 1,
      },
    };
    const nextState = {
      fields: [null, '0', null,
        null, null, null,
        null, null, null,
      ],
      turn: '1',
      status: 'playing',
    };
    expect(board(INITIAL_STATE, action)).toMatchObject(nextState);
  });
  it('Rejects moves on positions already taken', () => {
    const prevState = {
      fields: [null, '0', null,
        null, null, null,
        null, null, null,
      ],
      turn: '1',
      status: 'playing',
    };
    const action = {
      type: SET_MOVE,
      payload: {
        position: 1,
      },
    };
    const nextState = {
      fields: [null, '0', null,
        null, null, null,
        null, null, null,
      ],
      turn: '1',
      status: 'wrong_move',
    };
    expect(board(prevState, action)).toMatchObject(nextState);
  });
  it('Properly start a new game', () => {
    const prevState = {
      fields: ['1', '0', '1',
        '0', '0', '0',
        null, '1', '1',
      ],
      turn: '1',
      status: 'winner-0',
    };
    const action = {
      type: SET_NEW_GAME,
    };
    expect(board(prevState, action)).toMatchObject(INITIAL_STATE);
  });
  it('Properly declares player 1 winner', () => {
    const prevState = {
      fields: ['0', '0', '1',
        null, '0', '1',
        null, null, '1',
      ],
      turn: '1',
      status: 'playing',
    };
    const action = {
      type: SET_STATUS,
      payload: {
        status: 'winner-1',
      },
    };
    const nextState = {
      fields: ['0', '0', '1',
        null, '0', '1',
        null, null, '1',
      ],
      turn: '1',
      status: 'winner-1',
    };
    expect(board(prevState, action)).toMatchObject(nextState);
  });
  it('Properly declares player 0 winner', () => {
    const prevState = {
      fields: ['0', '0', '0',
        null, '1', '1',
        null, null, null,
      ],
      turn: '0',
      status: 'playing',
    };
    const action = {
      type: SET_STATUS,
      payload: {
        status: 'winner-0',
      },
    };
    const nextState = {
      fields: ['0', '0', '0',
        null, '1', '1',
        null, null, null,
      ],
      turn: '0',
      status: 'winner-0',
    };
    expect(board(prevState, action)).toMatchObject(nextState);
  });
});
