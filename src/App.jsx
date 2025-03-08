import './App.css';
import { Box, Container, Typography } from '@mui/material';


function App() {
  return (
    <Box sx={{ border: "1px solid pink", width: 1850, height: 900 }}>

      {/* Contenedor superior a lo largo de la página */}
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

      <p>Mi contenedor</p>

    </Box>
  );
}

export default App;

//box es el componente padre