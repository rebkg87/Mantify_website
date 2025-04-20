import React, { useRef } from 'react'
import AnimatedText from '../ui/AnimatedText'

const Hero2 = () => {

    return (
        <div className='h-screen w-full overflow-hidden relative'>
            <section className=' py-20 px-12 absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className='flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full mr-10'>
                    <div className="relative z-[1] w-full flex justify-center">
                        <img
                            src="assets/interior-of-modern-building-with-empty-escalator-a-2025-03-09-02-36-57-utc.jpg"
                            alt="benefits"
                            className="rounded-xl w-[80%] md:w-full object-cover aspect-square"
                        />
                        <div className="absolute -right-10 top-1/4  animate-fly rounded-xl lg:w-auto">
                            <img
                                src="assets/successfull-agreement-young-african-american-busi-2025-03-18-20-06-46-utc.jpg"
                                alt="benefits"
                                className="rounded-xl aspect-square md:w-72 lg:w-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='container flex flex-col md:flex-row items-start md:items-center order-2'>
                    <div className='flex flex-col'>
                        <AnimatedText
                            className="text-primary font-bold text-3xl dark:text-tertiary"
                            text={"Más que mantenimiento, tranquilidad operativa"}
                        />
                        <ul className='ml-4 text-tertiary-foreground dark:text-white list-disc'>
                            <li>
                                Gestión eficiente.
                            </li>
                            <li>
                                Diagnóstico y mantenimiento predictivo.
                            </li>
                            <li>
                                Plataforma digital y app para seguimiento en tiempo real.
                            </li>
                            <li>
                                Servicios personalizados para cada ubicación y necesidad.

                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero2