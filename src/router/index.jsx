import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                path: "/services",
                element: <ServicePage />,
                children: [
                    {

                    }
                ]
            },
            { path: "/about", element: <AboutPage /> },
            { path: "*", element: <NotFoundPage/> }
            

        ]

    }
])