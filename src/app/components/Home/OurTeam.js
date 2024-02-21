import * as React from "react";
import { useNavigate } from "react-router-dom";
import CustomTitleBar from "../shared/CustomTitleBar";
function OurTeam() {
  const navigate = useNavigate();
  const [teams] = React.useState([
    {
      image: "https://i.ibb.co/w6D38ZC/rijvee.jpg",
      name: "Rijvee Rahman",
      fb: "https://www.facebook.com/enamanc",
    },
    {
      image: "https://i.ibb.co/Mkypmw9/yousuf.jpg",
      name: "Yousuf Sharker",
      fb: "https://www.facebook.com/rafsan.ahmed.77770",
    },
    {
      image: "https://i.ibb.co/yY5z2qF/sr.jpg",
      name: "Sohanur Rahman",
      fb: "https://www.facebook.com/enamanc",
    },
  ]);

  return (
    <div
      className="container mx-auto mt-20"
      style={{ borderEndEndRadius: "120px", borderStartStartRadius: "120px" }}
    >
      <CustomTitleBar title="Our Team" />
      <div className="text-primary grid lg:grid-cols-3 gap-3 mt-5">
        {teams.map((el) => (
          <div data-aos="zoom-in">
            <img
              src={el?.image}
              alt="avatar"
              className="rounded-full w-[200px] h-[200px] mb-[15px] m-auto"
            />
            <h5 className="text-26 text-primary font-semibold mb-[15px]">
              {el?.name}
            </h5>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default OurTeam;
