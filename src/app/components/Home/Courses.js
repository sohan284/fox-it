import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
import Wave from "react-wavify";
function Courses() {
  const navigate = useNavigate();
  const images = [
    {
      url: "https://i.postimg.cc/0yGwGfCF/gpd-1.jpg",
      title: "See More",
      width: "100%",
    },
    {
      url: "https://i.postimg.cc/63jg1CBf/wbd.webp",
      title: "See More",
      width: "100%",
    },
    {
      url: "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
      title: "See More",
      width: "100%",
    },
    {
      url: " https://i.ibb.co/rMcS2MX/73442450eb7c63e3df3defd09a775fda.jpg",
      title: "See More",
      width: "100%",
    },

  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    fontFamily: "monospace",
    bottom: 0,
    display: "",
    alignItems: "bottom",
    justifyContent: "",
    color: "#F0EDCC",
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  // const ImageMarked = styled('span')(({ theme }) => ({
  //     height: 3,
  //     width: 18,
  //     backgroundColor: theme.palette.common.white,
  //     position: 'absolute',
  //     bottom: -2,
  //     left: 'calc(50% - 9px)',
  //     transition: theme.transitions.create('opacity'),
  // }));

  return (
    <div
      className="container mx-auto"
      style={{ borderEndEndRadius: "120px", borderStartStartRadius: "120px" }}
    >
      <h1 className="font-extrabold text-primary text-4xl pt-10">
        Featured Courses
      </h1>
      <span className="bg-primary text-[5px] rounded-full">
        ______________________________________
      </span>
      <div className="text-primary grid lg:grid-cols-3 gap-3 mt-5">
        {images.map((image) => (
          <div className=" border-white hover:rounded-none rounded-lg  mx-5 lg:mx-0">
            <ImageButton
              onClick={() => {
                navigate("/reg-form");
              }}
              focusRipple
              key={image.title}
              style={{
                width: image.width,
                backgroundColor: 'red',
                borderRadius: '10',
                border: '1px solid #F0EDCC',
                boxShadow: "revert",
                // marginInline: 5,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image></Image>
            </ImageButton>
            {/* <div className='container mx-auto relative'>
              <Wave fill="url(#gradient)">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="1%" stopColor="#F0EDCC" />
                    <stop offset="60%" stopColor="#002F31" />
                  </linearGradient>
                </defs>

              </Wave>
            </div> */}
          </div>

        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Courses;
