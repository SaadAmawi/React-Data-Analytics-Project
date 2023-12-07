import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-container'>

        <video src="/Videos/BG.mp4" autoPlay loop muted />
        <h1>
            A Smart Solution to Alzheimer's and Dementia
        </h1>
        <p>Improve your cognition today!</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'> Download Now!</Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Watch Trailer!</Button>
        </div>
      
    </div>
  )
}

export default Hero
