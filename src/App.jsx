import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

// TODOS
// - fix outline of headshot
// - change colors, purple, blue, white?
// - new font
// - h5 tags?
// - text when hovering over icons