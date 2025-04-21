import React from 'react'
import Contact from '../components/sections/Contact'

const ContactPage = () => {
    return (
        <div>
            <Contact
                contactTitle="Tu empresa merece un mantenimiento sin complicaciones"
                contactDescription="En Mantify, nos encargamos de que tus espacios funcionen a la perfección, para que tú puedas concentrarte en hacer crecer tu negocio.
                
                Rellena el formulario y descubre cómo podemos ayudarte con una solución a medida."
                contactList="📞 Respuesta rápida | ✅ Gestión eficiente | 📍 Operamos en Barcelona y alrededores"
                contactCTA="Hablemos. Queremos conocer tu empresa."
            />
        </div>
    )
}

export default ContactPage