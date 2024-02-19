import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import Card from "../components/Courses/Card";
import CustomTitleBar from "../components/shared/CustomTitleBar";
function CoursesCards() {
  const navigate = useNavigate();
  const images = [
    {
      url: "https://i.postimg.cc/0yGwGfCF/gpd-1.jpg",
      title: "Graphics Design",
      price: '2190',
      width: "100%",
    },
    {
      url: "https://i.postimg.cc/63jg1CBf/wbd.webp",
      title: "Web Development",
      price: '2990',
      width: "100%",
    },
    {
      url: "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
      title: "Data Entry",
      price: '799',
      width: "100%",
    },
    {
      url: " https://i.ibb.co/rMcS2MX/73442450eb7c63e3df3defd09a775fda.jpg",
      title: "Digital Marketing",
      price: '1590',
      width: "100%",
    },
  ]

  return (
    <motion.div
      className="container mx-auto mt-20"
      style={{ borderEndEndRadius: "120px", borderStartStartRadius: "120px" }}
    >
      <CustomTitleBar title="Featured Courses" />
      <div className=" grid lg:grid-cols-3 gap-5">
      {images?.map(card => <div>
            <Card
            image={card.url}
            title={card.title}
            price={card.price}/>
        </div>)}
      </div>
      
    </motion.div>
  );
}

export default CoursesCards;
