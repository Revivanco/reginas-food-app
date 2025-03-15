import React from "react"
import { Container, Typography} from "@mui/material";


function contPresentacion(){
    return(
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
)}

export default contPresentacion