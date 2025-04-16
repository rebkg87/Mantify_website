import { NavLink } from 'react-router-dom';

const MobileNav = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolut top-full left-0 w-full h-full bg-primary shadow-md z-50 transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col gap-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center text-sm ${isActive ? 'text-primary font-semibold active:font-bold' : 'text-secondary'} hover:text-primary dark:text-white dark:hover:text-secondary transition-colors`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/About"
                        className={({ isActive }) => `flex items-center text-sm ${isActive ? 'text-primary font-semibold active:font-bold' : 'text-secondary'} hover:text-primary dark:text-white dark:hover:text-secondary transition-colors`}
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Services"
                        className={({ isActive }) => `flex items-center text-sm ${isActive ? 'text-primary font-semibold active:font-bold' : 'text-secondary'} hover:text-primary dark:text-white dark:hover:text-secondary transition-colors`}
                    >
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Contact"
                        className={({ isActive }) => `flex items-center text-sm ${isActive ? 'text-primary font-semibold active:font-bold' : 'text-secondary'} hover:text-primary dark:text-white dark:hover:text-secondary transition-colors`}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MobileNav;
