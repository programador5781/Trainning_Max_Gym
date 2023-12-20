import React from 'react';
import './Home.module.css';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Reasons from '../../components/Reasons/Reasons';
// import Gallery from '../../components/Carousel/Carousel';
// import Carousel from '../../components/Carousel/Carousel';
import Plans from '../../components/Plans/Plans';
import Testimonials from '../../components/Testimonials/Testimonials';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      {/* <Gallery /> */}
      {/* <Carousel /> */}
      <Plans /> 
      <Testimonials />
    </div>
  )
}
