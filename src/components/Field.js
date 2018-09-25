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

const Field = ({
  id,
  checkedBy = undefined,
}) => {
  const isPlayer = checkedBy && checkedBy < 2 ? `is-player-${checkedBy}` : '';
  return (
    <div
      className={`Field ${isPlayer}`}
      role="presentation"

    >
      {id}
    </div>
  );
};

export default Field;
