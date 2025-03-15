import React from "react";
import { Card, CardContent, Typography, Avatar, } from "@mui/material";
const TarjetaDeUsuario = () => {
    return (
        <Card 
            sx={{ 
                width: "23%",  
                height: 200,  
                position: "absolute", 
                top: "29%", 
                left: "70%",  
                transform: "translateX(-70%) translateY(-50%)",  
                textAlign: "center", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                boxShadow: 5, 
                borderRadius: 3,
                backgroundColor: "#1E3A8A",
                color: "white"  
            }}
        >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ 
                    width: 70, 
                    height: 70, 
                    bgcolor: "#FF69B4",  
                    color: "white" 
                }} />
                <Typography variant="h6">Nombre</Typography>
                <Typography variant="body2">
                    Descripción breve del usuario.
                </Typography>
            </CardContent>
        </Card>
    );
};


export default TarjetaDeUsuario;