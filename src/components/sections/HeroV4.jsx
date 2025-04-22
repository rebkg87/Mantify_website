import React, { useRef } from 'react'
import AnimatedText from '../ui/AnimatedText'
import MainButton from '../ui/MainButton'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const HeroV4 = ({ title, description, buttonText, path, buttonVisibility = false, imageMain, imageFloat = false, list = [], imageClassName }) => {
    const navigate = useNavigate()

    return (
        <div className='h-screen w-full overflow-hidden relative mt-12'>
            <section className='py-28 px-12 absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className='flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full mr-10'>
                    <div className="relative z-[1] w-full flex justify-center">
                    {imageMain && (
                        <img
                            src={imageMain}
                            alt="main-photo"
                            className={`${imageClassName} rounded-xl w-[80%] md:w-full object-cover aspect-square `}
                        />
                    )}
                        <div className="absolute -right-10 top-1/4 animate-fly rounded-xl lg:w-auto">
                        {imageFloat && (
                            <img
                                src={imageFloat}
                                alt="float-photo"
                                className={`${imageClassName} rounded-xl aspect-square md:w-72 lg:w-80 object-cover`}
                            />
                        )}
                            
                        </div>
                    </div>
                </div>
                <div className='container flex flex-col md:flex-row items-start md:items-center order-2'>
                    <div className='flex flex-col'>
                        <AnimatedText
                            className="text-primary font-bold text-4xl leading-snug dark:text-tertiary"
                            text={title}
                        />
                        <p className="mb-2 text-lg text-tertiary-foreground dark:text-white">
                            {description}
                        </p>
                        {list && list.length > 0 && (
                            <ul className='ml-4 text-tertiary-foreground dark:text-white list-disc'>
                                {
                                    list.map((bullet, index) => (
                                        <li key={index}> {bullet}</li>
                                    ))
                                }
                            </ul>
                        )}
                        {
                            buttonVisibility && (
                                <MainButton
                                    className="w-fit mt-8 font-semibold text-xs rounded-xl shadow-sm hover:scale-105 dark:hover:bg-white dark:hover:text-secondary"
                                    variant="secondary"
                                    size="md"
                                    text={buttonText}
                                    iconButton={ChevronRightIcon}
                                    iconVisibility="icon-visible"
                                    onClick={() => navigate(`${path}`)}
                                    label="Service-Button"
                                    type="button"
                                />
                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroV4