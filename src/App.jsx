import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TarjetaDeUsuario from './components/tarjetaDeUsuario/tarjetaDeUsuario.jsx';
import BarText from './components/BarText/BarText.jsx';
import CustomCarrusel from './components/customCarrusel/customCarrusel.jsx';
import EjercicioDeComponentes from './components/tarjetaDeUsuario/EjercicioDeComponentes/EjercicioDeComponentes.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import Contador from './components/Contador/Contador.jsx';



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


  let isOn = false
  let condition = ""

  if (isOn === false) {
    condition = "none"
  } else {
    condition = "flex"
  }

  return (
    <Box
      sx={{
        border: "2px solid black",
        width: "98vw",
        height: "500vh",
        display: "flex",
        alignItems: "center",
        flexFlow: "column"
      }}
    >
      <BarText texto="🍦🍮🌮🍛🥞🥐🫕🍳🍪☕🥖Regina's Food 🍔🥑🧀🍫🎂🍷🫔🍝" />

      <CustomCarrusel data={data} />

      <Formulario></Formulario>

      <EjercicioDeComponentes display={condition}></EjercicioDeComponentes>

      <Contador></Contador>

    </Box>
  );
}

export default App;



