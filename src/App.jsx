import './App.css';
import { Box, Container, Typography } from '@mui/material';
import TarjetaDeUsuario from './components/tarjetaDeUsuario/tarjetaDeUsuario.jsx';
import customCarrusel from './components/carruselJoy/customCarrusel.jsx';
import BarText from './components/BarText/BarText.jsx';




function App() {

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

  return (
    <Box 
    sx={{ 
      border: "2px solid black",  
      width: "98vw",
      height: "98vh",
      display: "flex", 
      alignItems: "center", 
      flexFlow: "column",
      gap: "1em"

    }}
  >
     <BarText texto = "🍦🍮🌮🍛🥞🥐🫕🍳🍪☕🥖Regina's Food 🍔🥑🧀🍫🎂🍷🫔🍝" />
    <TarjetaDeUsuario   
      imagen={postres[0].src}
      titulo={postres[0].title}
      descripcion={postres[0].descripcion}
    />
    <TarjetaDeUsuario
    imagen = {postres[2].src}
    titulo = {postres[2].title}
    descripcion = {postres[2].descripcion}
    />
    </Box>
  );
}

export default App;



