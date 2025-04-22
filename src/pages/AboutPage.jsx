import React from 'react'
import HeroV3 from '../components/sections/HeroV3'
import HeroV4 from '../components/sections/HeroV4'
import HeroV5 from '../components/sections/HeroV5'
import companyValuesData from '../data/companyValuesData'

const AboutPage = () => {
    return (
        <div className='w-full'>
            <HeroV3
                title="Somos una empresa hecha"
                titleLine2="para cuidar de otras empresas"
                description="En Mantify nos especializamos en ofrecer soluciones integrales de mantenimiento para empresas que buscan externalizar esta gestión sin perder el control."
                descriptionLine2="Nuestra misión es ayudarte a que tus instalaciones estén siempre operativas, seguras y actualizadas, sin que tengas que preocuparte por ello."
                classname="p-24"
            />
            <div className=' -mt-8'>
                <HeroV4
                    classname="flex justify-center items-center"
                    title="Tu tranquilidad empieza con nosotros"
                    description="Somos expertos en Facility Management. En Mantify gestionamos el mantenimiento de tus espacios con eficiencia, transparencia y tecnología."
                    imageMain="assets/the-hall-inside.jpg"
                    imageClassName="md:w-4/5"
                />
            </div>
            <HeroV5
                className="justify-start"
                title="Valores que nos mueven"
                cards={companyValuesData}
            />
        </div>
    )
}

export default AboutPage