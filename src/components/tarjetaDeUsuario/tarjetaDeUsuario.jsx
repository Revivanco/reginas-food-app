import React from "react";
import { Card, CardContent, Typography, Avatar, } from "@mui/material";


const TarjetaDeUsuario = ({imagen, titulo, descripcion}) => {
    return (
        <Card 
            sx={{ 
                width: "350px",
                gap:"3em"
            }}
        >
            <CardContent>
                <Avatar/>
                <Typography>{titulo}</Typography>
                <Typography>{descripcion}</Typography>
            </CardContent>
        </Card>
    );
};


export default TarjetaDeUsuario;