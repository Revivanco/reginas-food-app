import React from "react";
import { Typography, Box } from "@mui/material";
import { useState } from "react";



const Contador = () => {
    const [stateNumber, setStateNumber] = useState(0)
    let counter = 0

    const suma = () => {
        setStateNumber(stateNumber + 1)
        console.log(stateNumber)
    }
    return (
        <Box>
            <Typography>{stateNumber}</Typography>
            <button onClick={suma}>Boton que suma</button>
        </Box>
    )
}

export default Contador