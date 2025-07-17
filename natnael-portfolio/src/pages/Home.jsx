import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-16">
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="blog">
        <Blog />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;