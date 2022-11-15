import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/taylorpterrill/' target='_blank'><AiOutlineLinkedin /></a>
        <a href='https://github.com/taylorterrill' target='_blank'><AiFillGithub /></a>
    </div>
  )
}

export default Socials