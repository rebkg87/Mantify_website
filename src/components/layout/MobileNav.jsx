import { NavLink } from 'react-router-dom';

const MobileNav = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} fixed top-full left-0 w-full h-full bg-primary bg-opacity-70  transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center justify-center text-xl ${isActive ? 'text-primary font-semibold active:font-bold  active:bg-primary active:text-secondary'  : 'text-tertiary'} dark:text-white dark:active:bg-white dark:active:text-primary dark:hover:text-tertiary transition-colors  bg-secondary w-full px-3 py-3 border border-white dark:border-primary`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/About"
                        className={({ isActive }) => `flex items-center justify-center text-xl ${isActive ? 'text-primary font-semibold active:font-bold  active:bg-primary active:text-secondary'  : 'text-tertiary'} dark:text-white dark:active:bg-white dark:active:text-primary dark:hover:text-tertiary transition-colors  bg-secondary w-full px-3 py-3 border border-white dark:border-primary`}
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Services"
                        className={({ isActive }) => `flex items-center justify-center text-xl ${isActive ? 'text-primary font-semibold active:font-bold  active:bg-primary active:text-secondary'  : 'text-tertiary'} dark:text-white dark:active:bg-white dark:active:text-primary dark:hover:text-tertiary transition-colors  bg-secondary w-full px-3 py-3 border border-white dark:border-primary`}
                    >
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Contact"
                        className={({ isActive }) => `flex items-center justify-center text-xl ${isActive ? 'text-primary font-semibold active:font-bold  active:bg-primary active:text-secondary'  : 'text-tertiary'} dark:text-white dark:active:bg-white dark:active:text-primary dark:hover:text-tertiary transition-colors  bg-secondary w-full px-3 py-3 border border-white dark:border-primary`}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MobileNav;
