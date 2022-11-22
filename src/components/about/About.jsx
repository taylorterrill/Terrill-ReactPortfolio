import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';

import { TbBulb } from 'react-icons/tb';
import { GiSwordInStone } from 'react-icons/gi';
import { TbHeart } from 'react-icons/tb';

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Working for Wisdom</h5> */}
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Me' />
          </div>
        </div>

        <div className='about__content'>
          <h3>Core Values</h3>
          <div className='about__cards'>

            <article className='about__card'>
              <TbBulb className='about__icon' />
              <h5>Understanding</h5>
              <small>deepening and broadening</small>
            </article>

            <article className='about__card'>
              <GiSwordInStone className='about__icon' />
              <h5>Courage</h5>
              <small>trusting myself</small>
            </article>

            <article className='about__card'>
              <TbHeart className='about__icon' />
              <h5>Compassion</h5>
              <small>we are human</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ex quia vel ad dolore, nulla optio minima consectetur doloribus omnis quibusdam quidem odio corrupti eligendi nesciunt dolores ducimus enim quis!
          </p>

        </div>
      </div>


    </section>
  )
}

export default About