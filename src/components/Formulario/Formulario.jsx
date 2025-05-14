import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";



const Formulario = () => {
    const [datosDeFormulario, setDatosDeFormulario] = useState({ name: "", lastName: "", email: "", age: 0, cellphone: ""})
    const [datosAdicionalesFormulario, setDatosAdicionalesDeFormulario] = useState({address:"", maritalStatus:""})


    const handleChange = (e) => {

        if (name === 'address' || name === 'maritalStatus') {
            setDatosAdicionalesDeFormulario((prev) => ({
           ...prev, [name]: value

       }))
      }
       // console.log(e)
       //console.log(e.target)
        const { name , value } = e.target 
       console.log(name)
       // console.log(value)
        setDatosDeFormulario((prev) => ({
            ...prev, [name]: value

        }))
    }


    const funcionConsologueadora = () => {
        console.log(datosDeFormulario)
    }


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
                    <TextField color="secondary" label="Name" name="name"  onChange={handleChange}></TextField>
                    <TextField color="secondary" label="Last Name" name="lastName"  onChange={handleChange}></TextField>
                    <TextField color="secondary" label="E-mail" name="email"  onChange={handleChange}></TextField>
                    <TextField color="secondary" label="Age" name="age"  onChange={handleChange}></TextField>
                    <TextField color="secondary" label="Cellphone" name="cellphone"onChange={handleChange}></TextField>

                    <TextField color="secondary" label="Adress" name="address"onChange={handleChange}></TextField>
                    <TextField color="secondary" label="Mrital status" name="maritalStatus"onChange={handleChange}></TextField>

                </Box>
                <Box>
                    <button  onClick={funcionConsologueadora} >Mi boton que consologuea</button>
                </Box>
            </Box>
        </Box>
    )
}

export default Formulario