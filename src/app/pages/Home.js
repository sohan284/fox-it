
import * as React from 'react';
import Navigation from "../components/Home/Navigation";
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import Courses from '../components/Home/Courses';
import Wave from 'react-wavify';
// import ContactUs from '../components/Home/ContactUs';
import Footer1 from '../components/shared/Footer';
function Home() {
    return (
        <div className="mx-auto">
            <Navigation />
            <Banner />
            <About />
            <div className='container mx-auto mt-20' style={{ borderTop: "5px solid #F0EDCC", borderStartStartRadius: "100px", borderStartEndRadius: "100px" }}>
                <Courses />
                <div className='container mx-auto relative'>
                    <Wave fill="url(#gradient)">
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="20%" stopColor="#F0EDCC" />
                                <stop offset="80%" stopColor="#1F1F1F" />
                            </linearGradient>
                        </defs>

                    </Wave>
                </div>
            </div>
            <Footer1></Footer1>
            {/* <ContactUs/> */}
        </div>
    )
}
export default Home;