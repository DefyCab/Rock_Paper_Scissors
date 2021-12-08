import React from 'react'
// import User from './components/User'
// import Ai from './components/Ai'

const App = () => {
  return (
    <>
      <div>
        <button data-cy="rock-button">Rock</button>
        <button data-cy="paper-button">Paper</button>
        <button data-cy="scissors-button">Scissors</button>
        
        <image data-cy="rock-icon"></image>
        <image data-cy="paper-icon"></image>
        <image data-cy="scissors-icon"></image>
      </div>
    </>
  )
}

export default App
