import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

const Layout = () => {
    const { darkMode } = useTheme();

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('bg-primary')
            document.body.classList.remove('bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-primary')

        }
    }, [darkMode])

    return (
        <div className={darkMode ? 'dark' : ''}>
            <header className="sticky top-0 w-full z-50">
                <Header />
            </header>
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout