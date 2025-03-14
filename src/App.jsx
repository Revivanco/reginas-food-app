import './App.css';
import { Box, Container, Typography } from '@mui/material';
import TarjetaDeUsuario from './components/tarjetaDeUsuario';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';

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

      {/* segundo contenedor*/}
      <Container
        sx={{
          border: "3px solid pink",
          width: "40%",
          position: "absolute",
          top: "15%",
          left: "5%",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          paddingBottom: 3,
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

      {/* tercer contenedor*/}
      <Container
        sx={{
          border: "3px solid pink",
          width: "40%",
          position: "absolute",
          top: "50%",
          left: "5%",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Recomendaciones Especiales
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#555",
            fontSize: "16px",
            lineHeight: 1.6,
            marginTop: 1
          }}
        >
          recomendaciones de lugares iran aqui
        </Typography>
      </Container>

      {/* carrusle*/}
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
      <TarjetaDeUsuario />
    </Box>
  );
}

export default App;


