import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Content = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          color: "#ffffff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        }}
      >
        <Typography variant="h3" sx={{ paddingBottom: 3 }}>
          Hello, My name is
          <span className="alex__text"> Alex </span>
          <br></br>and im a full-stack developer
        </Typography>

        <Button sx={{ border: "solid", color: "#d4af37" }}>Download CV</Button>
      </Box>
      <Box
        sx={{
          color: "#ffffff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Typography variant="h3" sx={{ color: "#ffffff" }}>
          Skills
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#ffff00" },
              margin: 0.5,
              borderColor: "#ffff00",
              color: "#ffff00",
              fontWeight: "Bold",
            }}
          >
            JavaScript
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#1cb2f5" },
              margin: 0.5,
              borderColor: "#1cb2f5",
              color: "#1cb2f5",
              fontWeight: "Bold",
            }}
          >
            React
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#9300ff" },
              margin: 0.5,
              borderColor: "#9300ff",
              color: "#9300ff",
              fontWeight: "Bold",
            }}
          >
            Redux
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#378805" },
              margin: 0.5,
              borderColor: "#378805",
              color: "#378805",
              fontWeight: "Bold",
            }}
          >
            Node.js
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#02198B" },
              margin: 0.5,
              borderColor: "#02198B",
              color: "#02198B",
              fontWeight: "Bold",
            }}
          >
            CSS
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#ff0000" },
              margin: 0.5,
              borderColor: "#ff0000",
              color: "#ff0000",
              fontWeight: "Bold",
            }}
          >
            HTML
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#013220" },
              margin: 0.5,
              borderColor: "#013220",
              color: "#013220",
              fontWeight: "Bold",
            }}
          >
            MongoDB
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#530000" },
              margin: 0.5,
              borderColor: "#530000",
              color: "#530000",
              fontWeight: "Bold",
            }}
          >
            NPM
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": { borderColor: "#378805" },
              margin: 0.5,
              borderColor: "#378805",
              color: "#378805",
              fontWeight: "Bold",
            }}
          >
            Git
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
