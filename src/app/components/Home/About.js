import React from "react";
import CustomTitleBar from "../shared/CustomTitleBar";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div className="container mx-auto mt-20">
      <CustomTitleBar title="About Us" />
      <div className="flex lg:flex-row flex-col mx-auto px-5">
        <div data-aos="zoom-in" className="text-primary w-full">
          <h4 data-aos="zoom-in" className="text-3xl font-bold my-5 text-left">
            Fox It | A global EdTech-based digital workforce development and
            skill-oriented education provider.
          </h4>
          <p data-aos="zoom-in" className="font-medium text-left">
            Fox IT offers a diverse range of five comprehensive courses designed
            to empower individuals with essential skills in today's digital
            landscape. From mastering the fundamentals of data entry to delving
            into the intricacies of web development, graphics design, digital
            marketing, and accounting management, our courses cater to a wide
            spectrum of interests and career aspirations. With experienced
            instructors, hands-on learning experiences, and cutting-edge
            curriculum, Fox IT ensures that every student receives the knowledge
            and practical expertise needed to thrive in their chosen field.
            Discover your potential and unlock new opportunities with Fox IT's
            transformative courses{" "}
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 gap-10 w-full m-5">
            <div
              data-aos="zoom-in"
              className="bg-secondary shadow-xl flex justify-center items-center h-32 px-5 rounded-3xl font-bold text-2xl text-primary font-serif"
              style={{ border: "5px solid #00978ff3" }}
            >
              <span>25 Students</span>
            </div>
            <div
              data-aos="zoom-in"
              className="bg-secondary shadow-xl flex justify-center items-center px-5 rounded-3xl font-bold text-2xl text-primary font-serif"
              style={{ border: "5px solid #00978ff3" }}
            >
              <span>3 Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
