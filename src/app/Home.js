import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import OurServices from "../components/OurServices";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ChooseUs />
            <OurServices />
        </div>
    );
}

export default Home;
