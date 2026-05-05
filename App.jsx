import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

function Dashboard() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            setDate(now.toDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "50px",
                textAlign: "center",
                background: theme === "dark" ? "linear-gradient(135deg, #2c3e50, #1a1a1a)" : "linear-gradient(135deg, #e0e0e0, #ffffff)",
                color: theme === "dark" ? "#ffffff" : "#000000",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <div
                style={{
                    background: "black",
                    padding: "40px",
                    borderRadius: "20px",
                    display: "inline-block",
                    marginTop: "50px",
                    boxShadow: "0 10px 25px black",
                    color: "white",
                }}
            >
                <h1>Dynamic Dashboard</h1>
                <h2>Welcome, User</h2>
                <p style={{ fontSize: "18px", marginBottom: "10px" }}>{date}</p>
                <p style={{ fontSize: "32px", margin: "10px 0" }}>{time}</p>
            </div>
        </div>
    );
}

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    style={{
                        padding: "12px 25px",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "25px",
                        border: "none",
                        background: "#444",
                        color: "white",
                        boxShadow: "0 5px 10px black",
                    }}
                >
                    Toggle Theme
                </button>
                <Dashboard />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
