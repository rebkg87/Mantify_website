import React, { useState } from 'react'
import SiteLogo from './SiteLogo';
import MainNav from './MainNav';
import DarkModeSwitch from '../theme/DarkModeSwitch';
import MobileNav from './MobileNav';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="block w-full max-w-screen-xl px-auto mx-auto bg-white dark:bg-primary bg-opacity-90 sticky top-3 shadow py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <nav className="container flex items-center justify-between mx-auto text-primary">
                <SiteLogo width={240} height={60} />

                <div className="hidden md:flex items-center gap-6">
                    <MainNav />
                </div>
                <div className='flex items-center'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="sm:block lg:hidden p-2 rounded bg-tertiary dark:bg-secondary text-primary dark:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <DarkModeSwitch />
                </div>
                <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </nav>
        </div>

    )
}

export default Header