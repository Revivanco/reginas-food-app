import React from "react"
import { Container, Typography } from '@mui/material';



function rfTitle(){
    return(
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
    )}


    export default rfTitle