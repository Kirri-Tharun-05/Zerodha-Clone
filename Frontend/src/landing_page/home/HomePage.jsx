import React from "react";
import Hero from "./Hero.jsx";
import Invest from "./Invest";
import Trust from "./Trust";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Education from "./Education";
function HomePage() {
    return (
        <>
            <Hero />
            <Invest />
            <Trust />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}
export default HomePage;