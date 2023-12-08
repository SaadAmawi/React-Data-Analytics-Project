
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Videos/BGis.mp4' autoPlay loop muted />
      
      <h1>MemorEyez</h1>
      <h2>A Smart Approach for Managing Alzheimer's and Dementia</h2>
      <p>
</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
        </div>
        <div className='hero-btns-download'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          
          <i class="fa-brands fa-windows"></i>&nbsp;DOWNLOAD NOW 
        </Button>
      
     
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          
          <i class="fa-brands fa-apple"></i>&nbsp;DOWNLOAD NOW 
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection