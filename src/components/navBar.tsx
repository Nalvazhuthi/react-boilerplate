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
                <a href="features" className="nav">Features</a>
                <a href="pricing" className="nav">Pricing</a>
                <a href="faq" className="nav">FAQ</a>
                <a href="login" className="nav">Login</a>
                <a href="signup" className="nav button">Sign Up</a>
                <div className="nav toggle-theme" onClick={handleToggleTheme}>
                    {theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
