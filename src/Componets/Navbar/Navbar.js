import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = (props) => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={{ "&:hover": { color: "#d4af37" }, color: "#ffffff" }}
              href="/"
            >
              <HomeIcon />
            </Button>

            <Button
              sx={{
                fontWeight: "bold",
                color: "#d4af37",
              }}
              href="/#header__projects"
            >
              PROJECTS
            </Button>

            <Button
              sx={{
                color: "#ffffff",
                "&:hover": { color: "#d4af37", fontWeight: "bold" },
              }}
              href="/About"
            >
              About
            </Button>
            <Button
              sx={{
                color: "#ffffff",
                "&:hover": { color: "#d4af37", fontWeight: "bold" },
              }}
              href="/Contact"
            >
              Contact
            </Button>
          </Box>
          <Box
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
