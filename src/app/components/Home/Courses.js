import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
function Courses() {
  const navigate = useNavigate();
  const images = [
    {
      url: "https://i.postimg.cc/0yGwGfCF/gpd-1.jpg",
      title: "See More",
      width: "49%",
    },
    {
      url: "https://i.postimg.cc/63jg1CBf/wbd.webp",
      title: "See More",
      width: "49%",
    },
    {
      url: "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
      title: "See More",
      width: "49%",
    },
    {
      url: " https://i.ibb.co/rMcS2MX/73442450eb7c63e3df3defd09a775fda.jpg",
      title: "See More",
      width: "49%",
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
      <div className="text-primary">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <ImageButton
              onClick={() => {
                navigate("/reg-form");
              }}
              focusRipple
              key={image.title}
              style={{
                width: image.width,
                marginInline: 5,
                marginTop: 10,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image></Image>
            </ImageButton>
          ))}
        </Box>
      </div>
      <div></div>
    </div>
  );
}

export default Courses;
