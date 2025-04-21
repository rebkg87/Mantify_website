import React, { useState } from 'react'
import MainInput from './MainInput'
import MainButton from './MainButton'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { contactFormSchema } from '../../validationSchemas/validationSchemas';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(contactFormSchema),
    });

    const onSubmit = async (data) => {
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log('✅ Email enviado:', result.text);
            reset();
            setShowModal(true);
        } catch (error) {
            console.error('❌ Error enviando email:', error);
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row gap-6 py-12 px-8 bg-slate-100 shadow-lg rounded-xl w-4/5'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4'>
                    <div>
                        <MainInput
                            id="name"
                            placeholder="Nombre"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <MainInput
                            id="email"
                            placeholder="Correo Electrónico"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <MainInput
                            id="phone"
                            placeholder="Teléfono"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>
                    <div>
                        <MainInput
                            id="company"
                            placeholder="Empresa"
                            {...register("company")}
                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            id="content"
                            {...register('content')}
                            placeholder="Escribe aquí tu mensaje..."
                            className="w-full rounded-2xl border border-secondary mt-3 place-content-start p-5 text-left focus:outline-tertiary  placeholder:text-secondary text-sm h-44 focus:text-primary"
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                        )}
                    </div>
                    <MainButton
                        className='mt-4'
                        text={isSubmitting ? 'Enviando...' : 'Enviar'}
                        variant='secondary'
                        type='submit'
                        disabled={isSubmitting}
                        label='Submit'
                    />
                </form>
            </div>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full"
                        >
                            <h3 className="text-xl font-bold text-primary mb-4">¡Mensaje enviado!</h3>
                            <p className="text-gray-700 mb-6">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
                            >
                                Cerrar
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}


export default ContactForm