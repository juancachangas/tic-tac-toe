/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Modal from './Modal';
import { restartBoard } from '../store/actions/board';
import { PlayerModal } from './InputModal';

export const Game = ({
  status, restart, turn, players,
}) => (
  <div>
    <header>
      {`TicTacToe ${(players && players[+turn]) || ''} moves`}
      <button type="button" onClick={() => restart()}> New Game</button>
    </header>

    <div className="Game">
      <Board />
    </div>
    {
      players && players.length < 2
      && (
        <PlayerModal />
      )
    }
    {
      !['playing', 'new'].includes(status)
      && (
        <Modal status={status} names={players} />
      )
    }
  </div>
);
export const mapStateToProps = (state) => {
  const { status, turn } = state.board;
  const { players } = state;
  return {
    players,
    status,
    turn,
  };
};
export const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(restartBoard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
