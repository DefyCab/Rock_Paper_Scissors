import React from 'react'

const UserButtons = () => {
  const selectMove = () => {}
  return (
    <div>
      <button data-cy="rock-button" onClick={selectMove}>
        Rock
      </button>
      <button data-cy="paper-button" onClick={selectMove}>
        Paper
      </button>
      <button data-cy="scissors-button" onClick={selectMove}>
        Scissors
      </button>
    </div>
  )
}

export default UserButtons
