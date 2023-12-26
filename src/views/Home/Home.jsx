import React from 'react';
import './Home.module.css';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Reasons from '../../components/Reasons/Reasons';
import Plans from '../../components/Plans/Plans';
import Testimonials from '../../components/Testimonials/Testimonials';
import Join from '../../components/Join/Join';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
  

  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans /> 
      <Testimonials />
      <Join />
      <Footer />
    </div>
  )
}
