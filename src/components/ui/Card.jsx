import React from 'react'

const Card = ({ title, description, number }) => {
    return (
        <div className="group relative max-w-xs w-52 h-56 bg-gradient-to-tl from-primary to-secondary p-10 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-secondary dark:bg-white rounded-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary transform scale-y-0 transition-transform duration-500 group-hover:scale-y-100 origin-top group-hover:origin-bottom p-7 rounded-xl">
                <h2 className="absolute left-10 top-12 text-4xl font-extrabold opacity-50 transition-opacity duration-500 group-hover:opacity-100 transform group-hover:translate-y-[-40px] group-hover:text-tertiary text-secondary dark:text-tertiary">
                    {number}
                </h2>
                <h3 className='relative text-lg font-semibold mb-4 text-tertiary dark:text-secondary group-hover:text-white dark:group-hover:text-primary transition-all duration-500 group-hover:mt-10'>
                    {title}
                </h3>
                <p className="text-tertiary dark:text-secondary">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card
