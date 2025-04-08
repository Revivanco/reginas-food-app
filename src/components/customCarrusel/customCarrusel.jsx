import React from "react";
import Box from '@mui/joy/Box';
import TarjetaDeUsuario from "../tarjetaDeUsuario/tarjetaDeUsuario";



const CustomCarrusel = ({ data = [] }) => {
    console.log(data)
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "row",
                    width: "70vw",
                    height: "60vh",
                    border: "1px solid",
                    overflowX: "scroll",
                }}
            >
                {data.map((item) => (

                    <>
                        <TarjetaDeUsuario
                            imagen={item.src}
                            titulo={item.title}
                            descripcion={item.description}
                        />

                    </>
                ))}
            </Box>
        </>
    );
}

export default CustomCarrusel;