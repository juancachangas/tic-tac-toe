import React from 'react';
import FieldBox from './Field';

const fieldsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => (
  <div className="Board">
    {fieldsArray.map(id => <FieldBox id={id} key={id} />)}
  </div>
);

export default Board;
