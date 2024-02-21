import * as React from "react";
import Navigation from "../components/Home/Navigation";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Courses from "../components/Home/Courses";
import Wave from "react-wavify";
// import ContactUs from '../components/Home/ContactUs';
import Footer1 from "../components/shared/Footer";
import OurTeam from "../components/Home/OurTeam";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function Home() {
  return (
    <motion.div
      className="mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navigation />
      <Banner />
      <About />
      <Courses />
      <OurTeam />
      <Footer1></Footer1>
      {/* <ContactUs/> */}
    </motion.div>
  );
}
export default Home;
