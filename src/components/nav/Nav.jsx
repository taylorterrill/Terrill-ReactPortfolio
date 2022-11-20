import React from 'react';
import './nav.css';
import { useState } from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { RiFilePaper2Line } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';



// useState hook will adjust the background color of the nav icons depending on which icon is clicked
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#'
        onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome /></a>
      <a href='#about'
        onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser /></a>
      <a href='#portfolio'
        onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineBook /></a>
      <a href='#resume'
        onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}>
        <RiFilePaper2Line /></a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMessage /></a>
    </nav >
  )
}

export default Nav