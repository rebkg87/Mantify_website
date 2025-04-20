import React from 'react'
import MainInput from './MainInput'

const ContactForm = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 py-12 px-8 bg-slate-100 shadow-lg rounded-xl w-4/5'>
            <div>
                <MainInput
                    id="Name"
                    placeholder="Nombre"
                />
                <MainInput
                    id="email"
                    placeholder="Correo Electrónico"
                />
                <MainInput
                    id="phone"
                    placeholder="Teléfono"
                />
                <MainInput
                    id="title"
                    placeholder="Asunto"
                />
                <textarea
                    id="content"
                    placeholder="Escribe aquí tu mensaje..."
                    className="w-full rounded-2xl border border-secondary mt-3 place-content-start p-5 text-left focus:outline-tertiary  text-tertiary-foreground placeholder:text-secondary text-sm h-44"
                />
            </div>
        </div>
    )
}

export default ContactForm