import Box from "@mui/material/Box";
import React from "react";
import NavBar from "./navBar/navBar";
import image from "./assets/image.png";
import { Button, Typography } from "@mui/material";
function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "91vh",
          backgroundColor: "#393E46",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
          }}
        >
          <Typography variant="h3" sx={{ color: "#FFFFFF" }}>
            Hi! there Download developer feed chrom extension from{" "}
          </Typography>
          <Button variant="contained" sx={{ bgcolor: "#00ADB5" }}>
            Download Extension
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
