import React from 'react'
import Card from '../ui/Card'
import processData from '../../data/processData'

const HowWeDo = () => {

    return (
        <div className='mt-12 w-full h-screen flex flex-col items-center py-20 px-12 gap-6 dark:bg-secondary bg-tertiary'>
            <div>
                <h2 className='text-secondary font-bold text-3xl dark:text-tertiary'>
                    ¿Cómo lo hacemos?
                </h2>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-4'>
                { processData.map(proc => (
                    <Card
                    key={proc.number}
                    number={proc.number}
                    title={proc.title}
                />
                ))}
            </div>
        </div>
    )
}

export default HowWeDo