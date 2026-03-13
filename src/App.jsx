import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";

import { ThemeProvider } from "@/components/theme-provider"
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
    const location = useLocation();

    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.send({ hitType: "pageview", page: location.pathname });
        }
    }, [location]);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/"        element={<Homepage />} />
                        <Route path="/about"   element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*"        element={<Notfound />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </ThemeProvider>
    );
}

export default App;
