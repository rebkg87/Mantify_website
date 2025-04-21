import React from 'react'
import MainButton from './MainButton'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, description, icon: Icon, path }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        <div className="rounded p-6 bg-white w-full md:max-w-64 h-72 font-bold flex items-start gap-3 shadow-lg flex-col hover:scale-110">
            <div className="relative w-11 h-11 bg-tertiary p-3 rounded-full">
                <Icon className="absolute w-9 md:w-12 text-secondary" />
            </div>
            <div className="text">
                <h5 className="mt-4 mb-1 font-semibold text-xl md:text-sm text-secondary">{title}</h5>
                <p className="text-xs leading-snug text-tertiary-foreground">{description}</p>
            </div>
            <MainButton
                className="md:w-auto font-semibold text-xxs mt-3 rounded-none hover:scale-105"
                variant="secondary"
                size="sm"
                text="Saber más..."
                iconButton={ChevronRightIcon}
                iconVisibility="icon-visible"
                onClick={() => navigate(`/services/${path}`)}
                label="Service-Button"
                type="button"
            />
            </div>
        </motion.div>
    )
}

export default ServiceCard
