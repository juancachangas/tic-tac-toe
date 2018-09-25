/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer as setPlayer } from '../store/actions/players';

class InputModal extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  onChange = (ev) => {
    const text = ev.target.value;
    this.setState({ inputValue: text });
  }

  render() {
    const { inputValue } = this.state;
    const { players, addPlayer } = this.props;
    return (
      <article className={`Modal winner-${players.length}`}>
        <label htmlFor="player-name" id="player-name-text">
          Player name:
          <input id="player-name" type="text" value={inputValue} onChange={this.onChange} required />
        </label>
        <button
          type="button"
          onClick={() => {
            addPlayer(inputValue);
            this.setState({ inputValue: '' });
          }}
          disabled={inputValue.trim() === ''}
        >
          Add +
        </button>
      </article>
    );
  }
}
export const mapStateToProps = (state) => {
  const { players = [] } = state;
  return {
    players,
  };
};
export const mapDispatchToProps = dispatch => ({
  addPlayer: player => dispatch(setPlayer(player)),
});

export const PlayerModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputModal);
