import { CalendarDaysIcon, CheckCircleIcon, CursorArrowRippleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const servicesData = [
    {
        number: 1,
        title: "Mantenimiento Preventivo",
        description: "Planificación periódica adaptada a tus instalaciones para evitar fallos.",
        icon: CalendarDaysIcon,
        path: "mantenimiento-preventivo"
    },
    {
        number: 2,
        title: "Mantenimiento Correctivo",
        description: "Intervención rápida ante cualquier incidencia para minimizar tiempos de inactividad.",
        icon: CheckCircleIcon,
        path: "mantenimiento-correctivo"
    },
    {
        number: 3,
        title: "Gestión de Urgencias",
        description: "Resolvemos incidencias críticas fuera de horario con atención prioritaria.",
        icon: ExclamationTriangleIcon,
        path: "urgencias"
    },
    {
        number: 4,
        title: "Digitalización y Control",
        description: "Tecnología para seguimiento en tiempo real y reportes vía app y base de datos con IA.",
        icon: CursorArrowRippleIcon,
        path: "digitalizacion"
    }
]

export default servicesData