
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
    
          <a href="https://play.google.com/store/apps?hl=en&gl=US&pli=1" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
        width="185" height="58"alt="bn45"/></a>
          <a href="https://www.apple.com/ae/app-store/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          width="180" height="60" alt="bn45"/></a>
        
      
      
           
        
      </div>
    </div>
  );
}

export default HeroSection