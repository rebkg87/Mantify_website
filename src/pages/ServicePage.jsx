import React from 'react'
import HeroV3 from '../components/sections/HeroV3'
import HeroV5 from '../components/sections/HeroV5'
import servicesData from '../data/servicesData'

const ServicePage = () => {

    return (
        <div className='w-full'>
            <HeroV3
                title="Soluciones de mantenimiento"
                titleLine2="personalizadas para tu empresa"
                description="En Mantify nos encargamos de que tus espacios funcionen a la perfección, para que tú puedas concentrarte en lo más importante: hacer crecer tu negocio."
                buttonText="Solicita una propuesta personalizada"
                path="/contact"
                buttonVisibility
            />
            <HeroV5
                className="justify-end"
                title="Conoce Nuestros Servicios"
                cards={servicesData}
                buttonVisibility
            />
        </div>
    )
}

export default ServicePage