import store from '../index';

export const SET_MOVE = 'SET_MOVE';
export const SET_NEW_GAME = 'SET_NEW_GAME';
export const SET_STATUS = 'SET_STATUS';

export const WIN_CONDITIONS = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
];

export const setMove = position => (
  {
    type: SET_MOVE,
    payload: {
      position,
    },
  });
export const checkWinner = () => {
  const { fields, status } = store.getState().board;
  const winner = WIN_CONDITIONS.filter(condition => (
    fields[condition[0]] !== null && (fields[condition[0]] === fields[condition[1]]
    && fields[condition[1]] === fields[condition[2]])
  ));
  const result = winner.length > 0
    ? fields[winner[0][0]]
    : '-1';
  const hasAvailableMoves = fields.includes(null);
  let newStatus = status;
  if (result !== '-1') {
    newStatus = `winner-${result}`;
  } else if (!hasAvailableMoves) {
    newStatus = 'draw';
  }
  return {
    type: SET_STATUS,
    payload: {
      status: newStatus,
    },
  };
};
export const restartBoard = () => (
  { type: SET_NEW_GAME }
);
