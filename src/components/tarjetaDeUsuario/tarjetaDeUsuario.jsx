import React from "react";
import { Card, CardContent, Typography, Avatar, Box, } from "@mui/material";


const TarjetaDeUsuario = ({ imagen, titulo, descripcion }) => {
    return (
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                flexFlow: "row",
                border: "1px solid"
                

            }} >
            <CardContent
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "column",
                    width: "20vw",
                    height: "40vh",
                    overflowY: "hidden",
                    justifyContent: "center"
                }}
            >

                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "column",
                    width: "20vw",
                    height: "40vh",
                     overflowY: "hidden",
                    justifyContent: "center"
                }}>
                <Avatar
                    alt="la espinita" src={imagen}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexFlow: "row-reverse",
                        width: "15vw",
                        height: "25vh",
                        justifyContent:"center",
                        overflow: "auto"

                    }}
                    variant="square" />
                    </Box>
                    <Box>
                <Typography>{titulo}</Typography>
                <Typography>{descripcion}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};


export default TarjetaDeUsuario;