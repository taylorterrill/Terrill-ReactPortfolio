import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/headshot2020.png'
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Thank you for stopping by. My name is</h5>
        <h1>Taylor Terrill</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Socials />

        <div className='me'>
          <img src={ME} alt='headshot' />
        </div>
      </div>
    </header>
  )
}

export default Header