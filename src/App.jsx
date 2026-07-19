import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;