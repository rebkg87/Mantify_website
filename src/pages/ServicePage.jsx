import React from 'react'
import HeroV3 from '../components/sections/HeroV3'
import ServicesSection from '../components/sections/ServicesSection'

const ServicePage = () => {

    return (
        <div className='w-full'>
            <HeroV3
                title="Soluciones de mantenimiento"
                titleLine2="personalizadas para tu empresa"
                description="En Mantify nos encargamos de que tus espacios funcionen a la perfección, para que tú puedas concentrarte en lo más importante: hacer crecer tu negocio."
                buttonText="Solicita una propuesta personalizada"
                path="/contact"
            />
            <ServicesSection/>
        </div>
    )
}

export default ServicePage