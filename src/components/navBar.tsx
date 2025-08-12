import React, { useState, useEffect } from "react";
import { DarkThemeIcon, LightThemeIcon, LogoIcon } from "../assets/svg/exportIcons";
import { toggleTheme, getCurrentTheme } from "../utils/theme";

const NavBar: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Initialize theme from current settings
        const currentTheme = getCurrentTheme();
        setTheme(currentTheme);
    }, []);

    const handleToggleTheme = () => {
        const newTheme = toggleTheme();
        setTheme(newTheme);
    };

    return (
        <div className="navbar-container">
            <div className="logo">
                <LogoIcon />
            </div>

            <div className="navs">
                <div className="nav">Features</div>
                <div className="nav">Pricing</div>
                <div className="nav">FAQ</div>
                <div className="nav">Login</div>
                <div className="nav button">Sign Up</div>
                <div className="nav toggle-theme" onClick={handleToggleTheme}>
                    {theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
