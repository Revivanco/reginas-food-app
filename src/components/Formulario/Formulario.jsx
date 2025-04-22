import { Box, TextField, Typography } from "@mui/material";
import React from "react";



const Formulario = () => {
    return (
        <Box
            sx={{
                display: "flex",
                border: "1px solid",
                height: "600px",
                width: "400px",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"
            }}>
            <Box sx={{
                display: "flex",
                height: "150px",
                alignItems: "center"
            }}>
                <Typography>Registrate o suscribete</Typography>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        border: "1px solid",
                        borderColor: "red",
                        height: "450px",
                        width: "400px",
                        alignItems: "center",
                        justifyContent: "center",
                        flexFlow: "column"
                    }}>
                    <TextField color="secondary" label="Name"></TextField>
                    <TextField color="secondary" label="Last Name"></TextField>
                    <TextField color="secondary" label="E-mail"></TextField>
                    <TextField color="secondary" label="Age"></TextField>
                    <TextField color="secondary" label="Cellphone"></TextField>


                </Box>
            </Box>
        </Box>
    )
}

export default Formulario