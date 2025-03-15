import React from "react";
import { Card, Typography} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';




const data = [
    {
        src: 'https://i.pinimg.com/474x/18/2f/55/182f55abd1b3ab47c85bcb8abaa4c988.jpg',
        title: 'Night view',
        description: '4.21M views',
    },
    {
        src: 'https://i.pinimg.com/474x/6a/db/56/6adb56d11ba0707367344bba566e561f.jpg',
        title: 'Lake view',
        description: '4.74M views',
    },
    {
        src: 'https://i.pinimg.com/736x/f9/ad/14/f9ad1476a44bec537d1b55946e260941.jpg',
        title: 'Mountain view',
        description: '3.98M views',
    },
];



function carruselJoy() {
    return (
    <Box
        sx={{
            display: 'flex',
            gap: 1,
            py: 1,
            overflow: 'auto',
            width: 343,
            scrollSnapType: 'x mandatory',
            '& > *': {
                scrollSnapAlign: 'center',
            },
            '::-webkit-scrollbar': { display: 'none' },
        }}
    >
        {data.map((item) => (
            <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
                <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                    <img
                        srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.src}?h=120&fit=crop&auto=format`}
                        alt={item.title}
                    />
                </AspectRatio>
                <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                    <Typography level="title-md">{item.title}</Typography>
                    <Typography level="body-sm">{item.description}</Typography>
                </Box>
            </Card>
        ))}
    </Box>
    )
}

export default carruselJoy;