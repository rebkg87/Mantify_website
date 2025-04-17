import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { siteConfig } from "../../config/siteConfig";

const SiteLogo = ({ width, height }) => {
    const { darkMode } = useTheme()

    return (
        <img
            src={darkMode ? siteConfig.logoDark : siteConfig.logoLight}
            className="transition-all duration-300"
            width={width}
            height={height}
            alt="Logo"
        />
    )
}

export default SiteLogo