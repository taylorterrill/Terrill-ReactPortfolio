import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__title'>Taylor Terrill</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    </footer>
  )
}

export default Footer