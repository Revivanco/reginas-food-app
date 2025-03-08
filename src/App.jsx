import './App.css';
import { Box, Container, Typography } from '@mui/material';


function App() {
  return (
    <Box sx={{ border: "1px solid pink", width: "100%", height: "100vh" }}>

      {/* primer contenedor */}
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "#880E4F",
          padding: 2,
          textAlign: "center",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FF69B4",
            fontStyle: "italic",
            fontFamily: "'Dancing Script', cursive",
            letterSpacing: "1px",
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          Regina's Food
        </Typography>
      </Container>

      {/* segundo contenedor */}
      <Container
        sx={{
          border: "3px solid pink",  
          width: "40%",              
          position: "absolute",      
          top: "15%",                
          left: 0,                   
          textAlign: "center",      
          borderRadius: "8px",      
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.6
          }}
        >
          Siempre he creído que la comida es una de las mejores formas de disfrutar la vida. No soy chef, pero me apasiona descubrir lugares y platos deliciosos para compartir con los demás. Mi objetivo es recomendar experiencias gastronómicas que hagan que cada comida sea memorable. A través de mis recomendaciones, quiero que todos puedan disfrutar de sabores únicos y probar algo nuevo. Porque, aunque no cocine, mi amor por la buena comida y el deseo de compartirlo con ustedes es lo que me motiva a seguir buscando los mejores sabores para recomendar.
        </Typography>
      </Container>
      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#880E4F",
          color: "#fff",
          textAlign: "center",
          padding: 2,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Typography variant="body2" sx={{ fontStyle: "italic", fontSize: "14px" }}>
          © 2025 Regina's Food. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;