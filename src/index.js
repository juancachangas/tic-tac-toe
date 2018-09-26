import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import GameBoard from './components/Game';

ReactDOM.render(
  <Provider store={store}>
    <GameBoard />
  </Provider>,
  document.getElementById('app'),
);
