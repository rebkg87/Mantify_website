import React from 'react'
import MainHero from '../components/sections/MainHero'
import Hero2 from '../components/sections/Hero2'
import HowWeDo from '../components/sections/HowWeDo'
import Contact from '../components/sections/Contact'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <Hero2 />
      <HowWeDo />
      <Contact
        listVisibility="hidden"
        contactTitle="¿Necesitas mantenimiento sin complicaciones?"
        contactDescription="Te ayudamos a gestionar tus espacios con eficiencia y tecnología."
        contactCTA="Contáctanos y descubre cómo." />
    </div>
  )
}

export default HomePage