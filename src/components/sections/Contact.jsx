import React from 'react'
import ContactForm from '../ui/ContactForm'

const Contact = ({ contactTitle, contactDescription, contactList, contactCTA, listVisibility, className }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center md:flex-row gap-12 py-12 px-16 bg-gradient-to-tr from-white to-tertiary dark:from-primary dark:to-secondary`}>
            <div className="flex flex-col p-6" >
                <h2 className='text-secondary font-bold text-3xl dark:text-tertiary'>
                    {contactTitle}
                </h2>
                <p className='text-tertiary-foreground dark:text-white text-md mt-6'>
                    {contactDescription}
                </p>
                <ul className={`text-tertiary dark:text-white list-disc ${listVisibility} `}>
                    <li>
                        {contactList}
                    </li>
                </ul>
                <h4 className='inline-flex items-center justify-center text-secondary font-semibold text-lg dark:text-white p-4 outline shadow-md outline-tertiary rounded-2xl mt-6 '>
                    {contactCTA}
                </h4>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact