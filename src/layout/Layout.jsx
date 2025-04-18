import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';

const Layout = () => {
    const { darkMode } = useTheme();

    useEffect(()=> { 
        if (darkMode) {
            document.body.classList.add('bg-primary')
            document.body.classList.remove('bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-primary')

        }
    },[darkMode])

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