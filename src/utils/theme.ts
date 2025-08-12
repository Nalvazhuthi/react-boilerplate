export const getCurrentTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
};

export const toggleTheme = (): "light" | "dark" => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";

    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", newTheme);
    }
    if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
    }

    return newTheme;
};
