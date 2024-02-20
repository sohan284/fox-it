import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'
function Banner() {
    var items = [
        {
            img: "https://i.postimg.cc/0yGwGfCF/gpd-1.jpg",
            name: "Graphics Design",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            img: "https://i.postimg.cc/63jg1CBf/wbd.webp",
            name: "Web Development",
            description: "Hello World!"
        },
        {
            img: "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
            name: "Data Entry",
            description: "Hello World!"
        },
    ]

    return (
        <Carousel className=' container mx-auto'>
            {
                items.map((item, i) => <Paper>
                    <img className="w-full bannerImg" src={item?.img} alt="FoxIt" border="0"/>
                </Paper>)
            }
        </Carousel>
    )
}


export default Banner;