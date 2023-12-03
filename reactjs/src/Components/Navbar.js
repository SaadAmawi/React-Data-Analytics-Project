import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import './Button.css';

function Navbar() {
  return (
    <>
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        MemorEyez
        </Link>
     </div>
    </nav>
    </>
  )
}

export default Navbar
