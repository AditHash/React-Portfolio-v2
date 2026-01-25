import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import { ThemeProvider } from "@/components/theme-provider"
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </ThemeProvider>
	);
}

export default App;