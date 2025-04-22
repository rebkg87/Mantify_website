import React from 'react'
import MainButton from '../ui/MainButton'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const HeroV3 = ({ path, title, titleLine2, description, descriptionLine2, buttonText, buttonVisibility = false, classname }) => {
    const navigate = useNavigate()

    const handleCTAButton = () => {
        navigate(`${path}`)
    }
    return (
        <div className={`w-full h-auto px-8 py-24 bg-gradient-to-t from-white to-tertiary dark:from-primary dark:to-secondary ${classname}`}>
            <div className='flex flex-col px-24 w-3/4  '>
                <h2 className='font-bold text-5xl text-primary dark:text-tertiary  leading-none'>
                    {title} {' '}
                    <span className='text-primary font-bold inline-block dark:text-tertiary underline decoration decoration-tertiary mb-9'>
                        {titleLine2}
                    </span>
                </h2>
                <p className='text-lg text-tertiary-foreground dark:text-white'>
                    {description}
                </p>
                <p className='mt-10 text-lg text-tertiary-foreground dark:text-white'>
                    {descriptionLine2}
                </p>
                {buttonVisibility && (
                    <MainButton
                        className='w-fit font-semibold mt-10 rounded-xl hover:scale-105 items-start'
                        size='md'
                        text={buttonText}
                        iconButton={ChevronRightIcon}
                        iconVisibility="icon-visible"
                        onClick={handleCTAButton}
                        label="HeroV3-Button"
                        type="button"
                    />
                )}
            </div>
        </div>
    )
}

export default HeroV3