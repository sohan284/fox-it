
import * as React from 'react';
import Navigation from "../components/Home/Navigation";
import Banner from '../components/Home/Banner';
function Home() {
    return (
        <div className="container mx-auto">
            <Navigation/>
            <Banner/>
        </div>
    )
}
export default Home;