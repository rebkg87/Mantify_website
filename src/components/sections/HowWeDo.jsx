import React from 'react'
import Card from '../ui/Card'

const HowWeDo = () => {

    const process = [
        {
            number: "01",
            title: "Recibimos la incidencia"
        },
        {
            number: "02",
            title: "Evaluamos y priorizamos tareas"
        },
        {
            number: "03",
            title: "Asignamos al técnico más cercano o especializado."
        },
        {
            number: "04",
            title: "Intervención según nivel de criticidad."
        },
        {
            number: "05",
            title: "Reporte digital y cierre administrativo inmediato."
        },
        {
            number: "06",
            title: "Todo disponible en nuestra app y plataforma."
        }

    ]

    return (
        <div className='mt-12 w-full h-screen flex flex-col items-center py-20 px-12 gap-6 dark:bg-secondary bg-tertiary'>
            <div>
                <h2 className='text-secondary font-bold text-3xl dark:text-tertiary'>
                    ¿Cómo lo hacemos?
                </h2>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-4'>
                { process.map(proc => (
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