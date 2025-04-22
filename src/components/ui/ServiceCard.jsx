import React from 'react'
import MainButton from './MainButton'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, description, icon: Icon, path, iconCardVisibility = false, buttonVisibility = false }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="rounded p-6 bg-white w-full md:max-w-64 h-72 font-bold flex justify-between gap-3 shadow-lg flex-col hover:scale-110 transition-transform">
                <div>
                    <div className="relative w-11 h-11 bg-tertiary p-3 rounded-full">
                        <Icon className={`${iconCardVisibility} absolute w-9 md:w-12 text-secondary`} />
                    </div>
                    <div>
                        <h5 className="mt-8 mb-1 font-semibold text-xl md:text-sm text-secondary">{title}</h5>
                        <p className="text-xs leading-snug text-tertiary-foreground">{description}</p>
                    </div>
                </div>
                {
                    buttonVisibility && (
                        <MainButton
                    className="md:w-fit font-semibold text-xxs mt-3 rounded-none hover:scale-105"
                    variant="secondary"
                    size="sm"
                    text="Saber más..."
                    iconButton={ChevronRightIcon}
                    iconVisibility
                    onClick={() => navigate(`/services/${path}`)}
                    label="Service-Button"
                    type="button"
                    buttonVisibility
                />
                    )
                }
                
            </div>
        </motion.div>
    )
}

export default ServiceCard
