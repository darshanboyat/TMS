import React from 'react'
import Navbar from '../Navbar';
import Landing from '../LandingPage';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

function index() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Contact />
            <Footer/>
        </div>
    )
}

export default index