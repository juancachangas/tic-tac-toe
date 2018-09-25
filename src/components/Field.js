/*
 * Replace the `alert` with the actual dispatch later on
 *
 * You already have utilit classes available to mark the current field selected by a player:
 *  .is-player-0
 *  .is-player-1
 *
 * Check out the src/index.html for pre-defined basic css classes.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setMove as move, checkWinner as setStatus } from '../store/actions/board';

export const Field = ({
  id,
  field,
  status,
  setMove,
  checkWinner,
}) => {
  const isPlayer = field && field < 2 ? `is-player-${field}` : '';
  return (
    <div
      className={`Field ${isPlayer}`}
      role="presentation"
      onClick={() => {
        switch (status) {
          case 'new':
          case 'playing':
          case 'wrong_move': {
            setMove(id);
            checkWinner();
            break;
          }
          default: {
            break;
          }
        }
      }}
    >
      {id}
    </div>
  );
};
export const mapStateToProps = (state, ownProps) => {
  const { status, turn, fields } = state.board;
  const field = fields[ownProps.id];
  return {
    fields,
    status,
    turn,
    field,
  };
};
export const mapDispatchToProps = dispatch => ({
  setMove: position => dispatch(move(position)),
  checkWinner: () => dispatch(setStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Field);
