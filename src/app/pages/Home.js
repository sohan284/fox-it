
import * as React from 'react';
import Navigation from "../components/Home/Navigation";
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import Courses from '../components/Home/Courses';
import Wave from 'react-wavify';
// import ContactUs from '../components/Home/ContactUs';
import Footer1 from '../components/shared/Footer';
import OurTeam from '../components/Home/OurTeam';
import Form from '../components/Home/Form';
function Home() {
    return (
        <div className="mx-auto">
            <Navigation />
            <Banner />
            <About />
            <Courses />
            <OurTeam />
            <Footer1></Footer1>
            {/* <ContactUs/> */}
        </div>
    )
}
export default Home;