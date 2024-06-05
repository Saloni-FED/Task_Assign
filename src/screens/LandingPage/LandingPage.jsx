import React from 'react'
import Hero from '../../components/Hero/Hero'
import CardSection from '../../components/CardSection/CardSection'
import WeSection from '../../components/WeSection/WeSection'
import Pnp from '../../components/PlanNPricing/Pnp'
import Approach from '../../components/Approach/Approach'
import Portal from '../../components/Portal/Portal'
import ModernCarousel from '../../components/ModernCarousel/ModernCarousel'

const LandingPage = () => {
  return (
    <div className='landingPage overflow-x-hidden w-full h-full'>
        <Hero/>
        <CardSection/>
        <WeSection/>
        <Pnp/>
        <Approach/>
        <Portal/>
    </div>
  )
}

export default LandingPage