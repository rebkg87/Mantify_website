import React from 'react'
import servicesData from '../../data/servicesData'
import ServiceCard from '../ui/ServiceCard'
import AnimatedText from '../ui/AnimatedText'

const ServicesSection = () => {
    return (
        <div className='w-full px-8'>
            <AnimatedText
                className="font-bold px-24 text-6xl text-primary dark:text-tertiary  leading-none flex items-center justify-end"
                text={"Conoce Nuestros Servicios"}
            />
            <div className='my-10 flex flex-col md:flex-row gap-6 items-center justify-center'>
                {servicesData.map(service => (
                    <ServiceCard
                        key={service.number}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        path={service.path}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServicesSection