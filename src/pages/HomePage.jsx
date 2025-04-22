import React from 'react'
import MainHero from '../components/sections/MainHero'
import Contact from '../components/sections/Contact'
import HeroV4 from '../components/sections/HeroV4'
import HeroV2 from '../components/sections/HeroV2'
import { heroBenefits } from '../data/benefitsData'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <HeroV4
        title="Más que mantenimiento, tranquilidad operativa"
        buttonText="Conoce nuestros servicios"
        buttonVisibility
        path="/services"
        imageMain="assets/Mall-Photo.jpg"
        imageFloat="assets/successfull-agreement.jpg"
        list={heroBenefits}
      />
      <HeroV2 />
      <Contact
        listVisibility="hidden"
        contactTitle="¿Necesitas mantenimiento sin complicaciones?"
        contactDescription="Te ayudamos a gestionar tus espacios con eficiencia y tecnología."
        contactCTA="Contáctanos y descubre cómo." />
    </div>
  )
}

export default HomePage