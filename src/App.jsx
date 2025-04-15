import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TarjetaDeUsuario from './components/tarjetaDeUsuario/tarjetaDeUsuario.jsx';
import BarText from './components/BarText/BarText.jsx';
import CustomCarrusel from './components/customCarrusel/customCarrusel.jsx';



const App = () => {

  const data = [

    {
      src: 'https://i.pinimg.com/736x/6a/88/32/6a8832d29a911b320f9c68af86f8e134.jpg',
      title: 'Pizza',
      description: '6.56M views',
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
    }



  ];

  return (
    <Box
      sx={{
        border: "2px solid black",
        width: "98vw",
        height: "98vh",
        display: "flex",
        alignItems: "center",
        flexFlow: "column"
      }}
    >
      <BarText texto="🍦🍮🌮🍛🥞🥐🫕🍳🍪☕🥖Regina's Food 🍔🥑🧀🍫🎂🍷🫔🍝" />

      <CustomCarrusel data={data} />

      cuadrado
      <Box
        sx={{
          border: "1px solid",
          height: "350px",
          width: "300px",
          display: "flex",
          backgroundColor: "blue"
        }}>
        <Box
          sx={{
            border: "1px solid",
            alignItems: "center",
            height: "40px",
            width: "2000px",
            display: "flex",
            backgroundColor: "red"
          }}></Box>
        <Box
          sx={{
            height: "0%",
            width: "0%",
            borderBottom: "200px solid",
            borderLeft: "100px solid transparent",
            borderRight: "100px solid transparent"
          }}></Box>
      </Box>

      rectangulo
      <Box
        sx={{
          border: "1px solid",
          height: "350px",
          width: "700px",
          display: "flex",
          backgroundColor: "red"
        }}>
        <Box
          sx={{
            border: "1px solid",
            height: "100px",
            width: "100px",
            display: "flex",
            backgroundColor: "blue"
          }}></Box>

        <Box
          sx={{
            height: "0%",
            width: "0%",
            borderBottom: "200px solid",
            borderLeft: "100px solid transparent",
            borderRight: "100px solid transparent"
          }}></Box>
      </Box>



      triangulo
      <Box
        sx={{
          height: "0%",
          width: "0%",
          borderBottom: "200px solid",
          borderLeft: "100px solid transparent",
          borderRight: "100px solid transparent"
        }}>

        <Box
          sx={{
            border: "1px solid",
            height: "50px",
            width: "20px",
            display: "flex",
            backgroundColor: "red"
          }}>
        </Box>

        <Box
          sx={{
            border: "1px solid",
            height: "100px",
            width: "100px",
            display: "flex",
            backgroundColor: "blue"
          }}></Box>


      </Box>


    </Box>
  );
}

export default App;



