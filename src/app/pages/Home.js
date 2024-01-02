
import * as React from 'react';
import Navigation from "../components/Home/Navigation";
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import Courses from '../components/Home/Courses';
function Home() {
    return (
        <div className="mx-auto">
            <Navigation />
            <Banner />
            <About />
            <Courses/>
        </div>
    )
}
export default Home;