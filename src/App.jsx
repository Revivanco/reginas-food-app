import './App.css';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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

      {/* Carrusel */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "25%",
          height: "400px",
          padding: 2,
          borderRadius: "1px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFF",
          left: "50%",
          transform: "translateX(50%)",
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src="https://i.pinimg.com/474x/73/1b/33/731b330e8806b801389f0d11c6ae3fcd.jpg"
              alt="Hamburguesa"
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "8px"
              }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/474x/e5/9c/94/e59c942c1c4fe47313ea610699cc36aa.jpg"
              alt="Pizza"
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "8px"
              }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/99/69/eb/9969ebba5aa804106aed5e682e9dc4eb.jpg"
              alt="Tacos"
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "8px"
              }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/474x/91/03/0d/91030d5e1ef99bd9c5ce1289e3679443.jpg"
              alt="Sushi"
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "8px"
              }}
            />
          </div>
        </Slider>
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
    </Box>
  );
}

export default App;
