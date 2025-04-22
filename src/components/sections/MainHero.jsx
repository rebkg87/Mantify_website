import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { siteConfig } from '../../config/siteConfig'
import MainButton from '../ui/MainButton'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';


const MainHero = () => {
    const { darkMode } = useTheme()
    const navigate = useNavigate()

    const handleHeroButton = () => {
        navigate("/About")
    }

    return (
        <div className='h-screen w-full overflow-hidden relative'>
            <img
                src={darkMode ? siteConfig.gradientDark : siteConfig.gradientLight}
                className="w-full h-full object-cover object-left"
                alt="Background-Hero"
            />
            <section className='py-10 px-12 md:py-2 absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-center items-center text-left z-10'>
                <div className='container flex flex-col md:flex-row items-start md:items-center'>
                    <div className='flex flex-col md:order-1'>
                        <h1 className='text-primary font-bold text-5xl xl:text-7xl mb-4 dark:text-tertiary'>
                            Soluciones Integrales{" "}
                            <span className='text-primary font-bold inline-block dark:text-tertiary underline decoration decoration-tertiary'>
                                para tu empresa
                            </span>
                        </h1>
                        <p className="mb-10 text-lg text-tertiary-foreground dark:text-white">
                            Tu espacio, siempre en las mejores condiciones.
                        </p>
                        <MainButton
                            className='w-fit font-semibold text-xs rounded-xl shadow-sm hover:scale-105 dark:hover:bg-white dark:hover:text-secondary'
                            variant="secondary"
                            size="md"
                            text="Conócenos"
                            onClick={handleHeroButton}
                            iconVisibility="icon-visible"
                            iconButton={ChevronRightIcon}
                            label="Hero-Button"
                            type="button"
                        />
                    </div>
                </div>
                <img
                    src='assets/hero/MainHero_Image.jpg'
                    className="md:w-[70%] md:h-auto lg:w-[50%] w-full h-full object-left object-cover rounded-full md:rounded-tl-full md:rounded-bl-full hover:animate-bounce md:order-2 shadow-lg"
                    alt="Hero-Image-Home"
                />
            </section>
        </div>
    )
}

export default MainHero