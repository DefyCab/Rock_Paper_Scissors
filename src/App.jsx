import React, { useState } from 'react'
// import User from './components/User'
// import Ai from './components/Ai'

const App = () => {

const [userNumber, setUserNumber] = useState()

  const handleClick = (number) => {
    setUserNumber(number)
  }

  const [randomNumber, setRandomNumber] = useState()

  const alsoClick = (max) => {
    setRandomNumber (Math.floor(Math.random() * max))
  }

  return (
    <>
      <div>
        <button data-cy="rock-button" onClick={() => {
          handleClick(0)
          alsoClick(3)}}>Rock</button>
        <button data-cy="paper-button" onClick={() => {
          handleClick(1)
          alsoClick(3)}}>Paper</button>
        <button data-cy="scissors-button" onClick={() => {
          handleClick(2)
          alsoClick(3)}}>Scissors</button>
        
        <image data-cy="rock-icon"></image>
        <image data-cy="paper-icon"></image>
        <image data-cy="scissors-icon"></image>

        <p> User selection: {userNumber}</p>
        <p> Ai number: {randomNumber}</p>
      </div>
    </>
  )

}

export default App
