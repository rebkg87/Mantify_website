import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainButton from '../components/ui/MainButton'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const handle404Button = () => {
        navigate("/")
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-t from-white to-tertiary dark:from-primary dark:to-secondary'>
            <h2 className='font-bold text-5xl text-primary dark:text-tertiary  underline decoration decoration-tertiary '>
                404
            </h2>
            <p className='text-lg text-tertiary-foreground dark:text-white'>
                Página no encontrada
            </p>
            <MainButton
                variant='link'
                text="Volver al inicio"
                onClick={handle404Button}
                type="button"
                label="NotFound-Button"
            />
        </div>
    )
}

export default NotFoundPage