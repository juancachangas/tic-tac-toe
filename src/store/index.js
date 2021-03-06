/*
 * Use this file to implement your application store solution.
 *
 * Use any storage solution you like, even plain JavaScript is allowed. We have set this up to
 * use Redux for now.
 *
 * The store must implement the business logic for:
 *  - handling the players (entering player names, switching players, etc)
 *  - handling the game logic (winner & draw result)
 *  - resetting or starting a new game
 */
import { identity } from 'ramda';
import { createStore, combineReducers } from 'redux';
import { board } from './reducers/board';
import { players } from './reducers/players';

/* eslint-disable-next-line no-underscore-dangle */
const devtoolExtension = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) || identity;

const gameReducer = combineReducers({ board, players });

export default createStore(
  gameReducer,
  devtoolExtension(),
);
