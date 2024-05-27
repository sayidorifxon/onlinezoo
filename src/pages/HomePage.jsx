import React from 'react'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Pay from '../components/Pay'
import Testimonials from '../components/Testimonials'
import SliderSection from '../components/SliderSection'
import Pets from '../components/Pets'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Work/>
      <Pets/>
      <Pay/>
      <Testimonials/>
      <SliderSection/>
    </div>
  )
}

export default HomePage
