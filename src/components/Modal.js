import React from 'react';


const Modal = ({ status, names }) => {
  let message = '';
  switch (status) {
    case 'winner-0': {
      message = `${names[0]} WINS`;
      break;
    }
    case 'winner-1': {
      message = `${names[1]} WINS`;
      break;
    }
    case 'draw': {
      message = 'Dang! It\'s a draw';
      break;
    }
    case 'wrong_move': {
      message = 'Sorry! This box was taken long ago';
      break;
    }
    default: {
      break;
    }
  }
  return (
    <article className={`Modal ${status}`}>
      <h1 className="big-banner">
        {message}
      </h1>
    </article>
  );
};

export default Modal;
