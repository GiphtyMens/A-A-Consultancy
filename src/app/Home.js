import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import OurServices from "../components/OurServices";
import OurSpecialties from '../components/OurSpecialties';

const Home = () => {
    return (
        <div>
            <Hero />
            <ChooseUs />
            <OurServices />
            <OurSpecialties />
        </div>
    );
}

export default Home;
