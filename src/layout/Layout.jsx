import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';

const Layout = () => {
    const { darkMode } = useTheme();
    return (
        <div className={darkMode ? 'dark' : ''}>
        <header>
            <Header/>
        </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout