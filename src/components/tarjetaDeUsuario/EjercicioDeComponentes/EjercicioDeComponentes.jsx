import { Box, Typography } from "@mui/material";
import React from "react";


const EjercicioDeComponentes = ({ display }) => {
    return (
        <Box
            sx={{
                display: {display}
            }}>
            <Box
                sx={{
                    border: "1px solid",
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    backgroundColor: "blue"
                }}>

                <Box
                    sx={{
                        height: "0%",
                        width: "0%",
                        borderBottom: "200px solid",
                        borderLeft: "100px solid transparent",
                        borderRight: "100px solid transparent"
                    }}></Box>
            </Box>

            <Box
                sx={{
                    border: "1px solid",
                    height: "350px",
                    width: "700px",
                    display: "flex",
                    backgroundColor: "red"
                }}>
                <Box
                    sx={{
                        border: "1px solid",
                        height: "100px",
                        width: "100px",
                        display: "flex",
                        backgroundColor: "blue"
                    }}></Box>

                <Box
                    sx={{
                        height: "0%",
                        width: "0%",
                        borderBottom: "200px solid",
                        borderLeft: "100px solid transparent",
                        borderRight: "100px solid transparent"
                    }}></Box>
            </Box>


            <Box
                sx={{
                    height: "0%",
                    width: "0%",
                    borderBottom: "200px solid",
                    borderLeft: "100px solid transparent",
                    borderRight: "100px solid transparent"
                }}>

                <Box
                    sx={{
                        border: "1px solid",
                        height: "50px",
                        width: "20px",
                        display: "flex",
                        backgroundColor: "red"
                    }}>
                </Box>

                <Box
                    sx={{
                        border: "1px solid",
                        height: "100px",
                        width: "100px",
                        display: "flex",
                        backgroundColor: "blue"
                    }}></Box>


            </Box>

            <Box
                sx={{
                    border: "1px solid",
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Box
                    sx={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        border: "1px solid"
                    }}>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "100px",
                    height: "92px",
                    borderRadius: "85%",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center"
                }}>
                <Box sx={{
                    height: "0%",
                    width: "0%",
                    borderBottom: "75px solid",
                    borderLeft: "40px solid transparent",
                    borderRight: "40px solid transparent"
                }}>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "85%",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Box
                    sx={{
                        border: "1px solid",
                        height: "30px",
                        width: "30px",
                        display: "flex",
                        backgroundColor: "blue"
                    }}></Box>
            </Box>


            <Box
                sx={{
                    border: "1px solid",
                    height: "350px",
                    width: "700px",
                    display: "flex",
                    backgroundColor: "red",
                    alignItems: "flex-end",
                    justifyContent: "flex-end"
                }}>
                <Box
                    sx={{
                        border: "1px solid",
                        height: "350px",
                        width: "400px",
                        display: "flex",
                        backgroundColor: "green"
                    }}>
                    <Box
                        sx={{
                            border: "1px solid",
                            height: "170px",
                            width: "400px",
                            display: "flex",
                            backgroundColor: "black"
                        }}></Box>
                </Box>
            </Box>


            <Box
                sx={{
                    height: "350px",
                    width: "700px",
                    display: "flex",
                    backgroundColor: "red",
                    alignItems: "flex-end",
                    justifyContent: "flex-end"
                }}>
                <Box
                    sx={{
                        height: "350px",
                        width: "400px",
                        display: "flex",
                        backgroundColor: "green"
                    }}>
                    <Box
                        sx={{
                            height: "170px",
                            width: "400px",
                            display: "flex",
                            backgroundColor: "black",
                            alignItems: "flex-end",
                            justifyContent: "flex-end"


                        }}>
                        <Box
                            sx={{
                                height: "170px",
                                width: "200px",
                                display: "flex",
                                backgroundColor: "blue",
                            }}>
                            <Box
                                sx={{
                                    height: " 85px",
                                    width: "250px",
                                    display: "flex",
                                    backgroundColor: "pink"
                                }}></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    height: "350px",
                    width: "700px",
                    display: "flex",
                    backgroundColor: "red",
                }}>
                <Box
                    sx={{
                        height: "350px",
                        width: "350px",
                        display: "flex",
                        backgroundColor: "pink",
                        alignItems: "end"

                    }}>
                    <Box
                        sx={{
                            height: "175px",
                            width: "350px",
                            backgroundColor: "blue",
                            display: "flex",
                            alignItems: "center"
                        }}>
                        <Box
                            sx={{
                                height: "175px",
                                width: "175px",
                                backgroundColor: "green",
                                display: "flex",
                            }}>
                            <Box
                                sx={{
                                    height: " 88px",
                                    width: "175px",
                                    display: "flex",
                                    backgroundColor: "black",

                                }}>
                                <Box
                                    sx={{
                                        height: " 88px",
                                        width: "87px",
                                        display: "flex",
                                        backgroundColor: "purple"
                                    }}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        width: "350px",
                        border: "1px solid",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>este es el texto que voy a meter</Typography>
            </Box>

        </Box>
    )
}

export default EjercicioDeComponentes