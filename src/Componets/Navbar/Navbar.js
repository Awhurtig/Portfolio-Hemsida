import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import ButtonGroup from "@mui/material/ButtonGroup";
import AppBar from "@mui/material/AppBar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import FadeMenu from "../menuItem/menuItem";

const Navbar = (props) => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup
            sx={{ color: "#ffffff", paddingLeft: "80px" }}
            variant="text"
            aria-label="text button group"
          >
            <FadeMenu sx={{ color: "#ffffff" }} />

            <Button sx={{ color: "#ffffff" }}>Career</Button>
            <Button sx={{ color: "#ffffff" }}>About</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{ paddingRight: "80px" }}
          >
            <IconButton>
              <GitHubIcon sx={{ color: "#000000" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "#000000" }} />
            </IconButton>
            <Button sx={{ color: "#000000" }}>Contact</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
