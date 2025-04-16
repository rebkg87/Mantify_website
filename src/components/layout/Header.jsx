import React, { useState } from 'react'
import SiteLogo from './SiteLogo';
import MainNav from './MainNav';
import DarkModeSwitch from '../theme/DarkModeSwitch';
import MobileNav from './MobileNav';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="block w-full max-w-screen-xl px-5 mx-auto bg-white dark:bg-primary bg-opacity-90 sticky top-3 shadow py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
    <nav className="container flex items-center justify-between mx-auto text-primary">
        <SiteLogo width={240} height={60} />
        
        <div className={`xl:block sm:hidden lg:flex items-center gap-6`}>
            <MainNav />
        </div>

        <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="sm:block lg:hidden xl:hidden p-2 rounded bg-tertiary dark:bg-secondary text-primary dark:text-white transition-colors absolute right-5 top-3"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <DarkModeSwitch />
    </nav>
</div>

    )
}

export default Header