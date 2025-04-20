import React from 'react'
import MainHero from '../components/sections/MainHero'
import Hero2 from '../components/sections/Hero2'
import Card from '../components/ui/Card'
import HowWeDo from '../components/sections/HowWeDo'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <Hero2 />
      <HowWeDo/>
    </div>
  )
}

export default HomePage