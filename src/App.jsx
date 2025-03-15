import './App.css';
import { Box, Container, Typography } from '@mui/material';
import TarjetaDeUsuario from './components/tarjetaDeUsuario';
import CarruselJoy from '../src/components/carruselJoy/carruselJoy.jsx';
import Footer from '../src/components/footer/footer.jsx';
import ContPresentacion from '../src/components/contPresentacion/contPresentacion.jsx';
import ContRecomendaciones from './components/contRecomendaciones/contRecomendaciones.jsx';
import RfTitle from './components/rfTitle/rfTitle.jsx';

function App() {
  return (
    <Box 
    sx={{ 
      border: "1px solid pink",  
      width: "100%",  
      minHeight: "200vh",  
      display: "flex", 
      flexDirection: "column",  
      justifyContent: "flex-start", 
      alignItems: "center", 
      overflowY: "auto",  
    }}
  >
      <RfTitle/>

      <ContRecomendaciones/>

      <ContPresentacion />

      <TarjetaDeUsuario />

      <CarruselJoy />

      <Footer />
    </Box>
  );
}

export default App;


