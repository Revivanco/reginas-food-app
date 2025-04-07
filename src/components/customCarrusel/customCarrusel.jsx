import React from "react";
import Box from '@mui/joy/Box';




const data = [

    {
        src: 'https://i.pinimg.com/736x/6a/88/32/6a8832d29a911b320f9c68af86f8e134.jpg',
        title: 'Pizza',
        description: '4.21M views',
    },
    {
        src: 'https://i.pinimg.com/474x/6a/db/56/6adb56d11ba0707367344bba566e561f.jpg',
        title: 'Tacos',
        description: '4.74M views',
    },
    {
        src: 'https://i.pinimg.com/736x/f9/ad/14/f9ad1476a44bec537d1b55946e260941.jpg',
        title: 'Meet',
        description: '3.98M views',
    },
    {
        src: 'https://i.pinimg.com/736x/6a/88/32/6a8832d29a911b320f9c68af86f8e134.jpg',
        title: 'Pizza',
        description: '4.21M views',
    },
    {
        src: 'https://i.pinimg.com/474x/6a/db/56/6adb56d11ba0707367344bba566e561f.jpg',
        title: 'Tacos',
        description: '4.74M views',
    },
    {
        src: 'https://i.pinimg.com/736x/f9/ad/14/f9ad1476a44bec537d1b55946e260941.jpg',
        title: 'Meet',
        description: '3.98M views',
    },

];


function customCarrusel() {
    return (
        <Box>
        {data.map((item, index) => (
        <>
        </>
         ))}
        </Box>
    );
}

export default customCarrusel;