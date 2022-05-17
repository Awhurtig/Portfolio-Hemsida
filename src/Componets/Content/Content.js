import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Content = () => {
  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "50%",

          color: "#ffffff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Tjenis Penis detta va Hassan</Typography>
        <Typography variant="h5">asfdasdfasdfasdfsad</Typography>
        <Button sx={{ border: "solid", color: "#ffffff" }}>Download CV</Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "50%",
          color: "#ffffff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>aasdasdasd</Typography>
      </Box>
    </Box>
  );
};

export default Content;
