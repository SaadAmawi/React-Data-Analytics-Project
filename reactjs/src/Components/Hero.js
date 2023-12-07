
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Videos/BG2.mp4' autoPlay loop muted />
      
      <h1>MemorEyez</h1>
      <h2>A Smart Solution to Alzheimer's and Dementia</h2>
      <p>Improve your cognition today!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          
          DOWNLOAD NOW 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection