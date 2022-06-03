import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Test = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00000036",

        width: "100%",
        height: "100vh",
      }}
    >
      <Typography
        id="header__projects"
        variant="h2"
        sx={{
          color: "#d4af37",
          padding: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        PROJECTS
      </Typography>
      <Box
        sx={{
          paddingTop: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 400, height: 400, bgcolor: "#ffffff" }}></Box>
        <Box sx={{ width: 400, height: 400, bgcolor: "#000000" }}></Box>
        <Box sx={{ width: 400, height: 400, bgcolor: "#000000" }}></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          color: "#d4af37",
          fontSize: "bold",
          paddingTop: 5,
        }}
      >
        <Typography>Klarna Check-Out</Typography>
        <Typography>Spotify Clone</Typography>
        <Typography>Webbshop</Typography>
      </Box>
    </Box>
  );
};

export default Test;
