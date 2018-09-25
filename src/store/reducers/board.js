import { SET_MOVE, SET_NEW_GAME, SET_STATUS } from '../actions/board';


export const INITIAL_STATE = {
  fields: [null, null, null,
    null, null, null,
    null, null, null,
  ],
  turn: '0',
  status: 'new',
};

export const board = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { fields, turn } = state;
  switch (type) {
    case SET_MOVE: {
      const newFields = fields.map((field, index) => (
        index === payload.position
          ? turn
          : field));
      const isEmptyPosition = fields[payload.position] === null;
      if (isEmptyPosition) {
        return {
          status: 'playing',
          turn: turn === '0' ? '1' : '0',
          fields: newFields,
        };
      }
      return {
        ...state,
        status: 'wrong_move',
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: payload.status,
      };
    }
    case SET_NEW_GAME: {
      return { ...INITIAL_STATE };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
