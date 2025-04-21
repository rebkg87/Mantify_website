import React from 'react'

const Card = ({ title, description, number }) => {
    return (
        
        <div className="group relative max-w-xs w-60 h-52 bg-gradient-to-tl from-primary to-secondary dark:from-tertiary dark:to-white p-10 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-white dark:bg-white rounded-xl">
                <h2 className="pt-4 absolute left-10 top-2 group-hover:top-8 text-4xl font-extrabold opacity-10 transition-opacity duration-500 group-hover:opacity-100 transform group-hover:translate-y-[-40px] group-hover:text-tertiary dark:text-secondary text-tertiary">
                    {number}
                </h2>
                <h3 className='relative text-lg font-semibold mb-4 dark:text-secondary text-tertiary opacity-70 dark:group-hover:text-primary group-hover:text-white transition-all duration-500 group-hover:mt-6'>
                    {title}
                </h3>
                <p className="text-tertiary dark:text-secondary">
                    {description}
                </p>
        </div>
    )
}

export default Card
