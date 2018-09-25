import { ADD_PLAYER } from '../actions/players';


export const INITIAL_STATE = [];

export const players = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_PLAYER: {
      const newPlayer = payload.player;
      const newPlayers = state.length === 2 ? [...state] : [...state, newPlayer];
      return newPlayers;
    }
    default:
      return [...state];
  }
};
