import React from 'react'
import servicesData from '../../data/servicesData'
import ServiceCard from '../ui/ServiceCard'
import AnimatedText from '../ui/AnimatedText'

const HeroV5 = ({ title, cards = [], className, buttonVisibility = false }) => {
    return (
        <div className='w-full px-8'>
            <AnimatedText
                className={`${className} font-bold px-24 text-6xl text-primary dark:text-tertiary  leading-none flex items-center`}
                text={title}
            />
            <div className='my-10 flex flex-col md:flex-row gap-6 items-center justify-center'>
                {cards.map((card, index) => (
                    <ServiceCard
                        key={card.id || index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        path={card.path}
                        iconCardVisibility
                        buttonVisibility = {buttonVisibility}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroV5