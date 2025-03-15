import React from "react"
import {  Container, Typography } from "@mui/material";





function contRecomendaciones(){
    return(
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
)}


export default contRecomendaciones