import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
function Banner() {
    var items = [
        {
            img: "https://i.ibb.co/G95ZM9X/web-development-image.webp",
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            img: "https://i.ibb.co/KXhSmJG/imageedit-1-2620426014.png",
            name: "Random Name #2",
            description: "Hello World!"
        },

    ]

    return (
        <Carousel className='mt-10'>
            {
                items.map((item, i) => <Paper>
                    <img className=" w-full" src={item?.img} alt="FoxIt" border="0" />
                </Paper>)
            }
        </Carousel>
    )
}


export default Banner;