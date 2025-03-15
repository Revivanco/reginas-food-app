import React from "react";
import { Card, Typography} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';




const data = [
    {
        src: 'https://i.pinimg.com/736x/6a/88/32/6a8832d29a911b320f9c68af86f8e134.jpg',
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
                gap: 2,  
                py: 2,  
                overflow: 'auto',
                width: '80%',  
                scrollSnapType: 'x mandatory',
                position: 'absolute',  
                top: '65%',  
                left: '5%',  
                scrollBehavior: 'smooth',  
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {data.map((item) => (
                <Card orientation="horizontal" size="sm" key={item.title} variant="outlined" sx={{ width: 300 }}>  
                    <AspectRatio ratio="1" sx={{ minWidth: 120 }}> 
                        <img
                            srcSet={`${item.src}?h=100&fit=crop&auto=format&dpr=2 2x`} 
                            src={`${item.src}?h=240&fit=crop&auto=format`}
                            alt={item.title}
                        />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                        <Typography level="title-md" sx={{ fontSize: '1.5rem' }}>{item.title}</Typography>  
                        <Typography level="body-sm" sx={{ fontSize: '1.2rem' }}>{item.description}</Typography> 
                    </Box>
                </Card>
            ))}
        </Box>
    );
}

export default carruselJoy;