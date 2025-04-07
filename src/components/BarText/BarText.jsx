import React from "react";
import { Box, Typography } from '@mui/material';



function BarText( {texto} ) {
  return (
      <Box
          sx={{
              backgroundColor: "#880E4F", 
              color: "#fff",
              textAlign: "center",
              padding: 2,
              width: "96vw",

              display: "flex",

              top: 0,
              left: 0,
              height: "60px", /* Ajusta el alto según necesites */
              color: "white",
               lineHeight : "60px"
          }}
      >
          <Typography variant="body2" sx={{ fontStyle: "normal", fontSize: "55px" }}>
          {texto}
          </Typography>
      </Box>
  );
}

export default BarText
