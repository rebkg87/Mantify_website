import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `text-sm ${isActive ? 'text-primary font-semibold' : 'text-secondary'} hover:text-secondary dark:text-white dark:hover:text-tertiary transition-colors`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => `text-sm ${isActive ? 'text-primary font-semibold' : 'text-secondary'} hover:text-secondary dark:text-white dark:hover:text-tertiary transition-colors`}
                    >
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `text-sm ${isActive ? 'text-primary font-semibold' : 'text-secondary'} hover:text-secondary dark:text-white dark:hover:text-tertiary transition-colors`}
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `text-sm ${isActive ? 'text-primary font-semibold' : 'text-secondary'} hover:text-secondary dark:text-white dark:hover:text-tertiary transition-colors`}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MainNav;
