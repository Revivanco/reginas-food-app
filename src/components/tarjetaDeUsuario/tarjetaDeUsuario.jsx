import React from "react";
import { Card, CardContent, Typography, Avatar, } from "@mui/material";


const TarjetaDeUsuario = ({ imagen, titulo, descripcion }) => {
    return (
        <Card
        sx={{
            display: "flex",
            alignItems: "center",
        }} >
            <CardContent
            sx={{
            display: "flex",
            alignItems: "center",

            }}
                >
                <Avatar
                    alt="la espinita" src={imagen}
                    sx={{
                        display: "flex",
                        alignItems: "center",

                    }}
                    variant="square" />
                <Typography>{titulo}</Typography>
                <Typography>{descripcion}</Typography>
            </CardContent>
        </Card>
    );
};


export default TarjetaDeUsuario;