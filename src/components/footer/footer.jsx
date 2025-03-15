import React from "react";
import { Box, Typography } from '@mui/material';



function footer() {
  return (
      <Box
          sx={{
              backgroundColor: "#880E4F", 
              color: "#fff",
              textAlign: "center",
              padding: 2,
              width: "100%",
              position: "fixed",  
              bottom: 0,
              left: 0, 
          }}
      >
          <Typography variant="body2" sx={{ fontStyle: "italic", fontSize: "14px" }}>
              © 2025 Regina's Food. Todos los derechos reservados.
          </Typography>
      </Box>
  );
}

export default footer
