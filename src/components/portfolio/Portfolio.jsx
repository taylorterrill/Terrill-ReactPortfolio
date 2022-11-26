import React from 'react';
import './portfolio.css';
import IMGTaskMaster from '../../assets/construction.jpg';
import IMGSocialNetwork from '../../assets/SocialNetwork.jpg';
import IMGTechBlog from '../../assets/TechBlog.jpg';
import IMGECom from '../../assets/ECommerce.jpg';
import IMGRecipeFinder from '../../assets/RecipeFinder.jpg';



const data = [
  {
    id: 1,
    image: IMGTechBlog,
    title: 'Task Master: Productivity Application (Coming Soon)',
    github: 'https://github.com/MarshallJacob/the_task_master',
    demo: ''
  },
  {
    id: 2,
    image: IMGTechBlog,
    title: 'Social Network API',
    github: 'https://github.com/taylorterrill/18_SocialNetworkAPI_Terrill',
    demo: 'https://www.youtube.com/watch?v=MJqlbmFK_BE'
  },
  {
    id: 3,
    image: IMGTechBlog,
    title: 'Tech Blog',
    github: 'https://github.com/taylorterrill/14_Tech-Blog_Terrill',
    demo: 'https://young-anchorage-23712.herokuapp.com/'
  },
  {
    id: 4,
    image: IMGTechBlog,
    title: 'E Commerce Backend',
    github: 'https://github.com/taylorterrill/13_E-Commerce_Terrill',
    demo: 'https://www.youtube.com/watch?v=lbIzwwv8g9E'
  },
  {
    id: 5,
    image: IMGTechBlog,
    title: 'Recipe Finder',
    github: 'https://github.com/taylorterrill/Recipe-Finder',
    demo: 'https://murmuring-sea-48556.herokuapp.com/'
  },
  {
    id: 6,
    image: IMGTechBlog,
    title: 'Band Website: Cardboard Club (Coming Soon)',
    github: 'https://github.com/taylorterrill/cardboardclub',
    demo: 'https://cardboardclubmusic.com'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Developer Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {  
            return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio