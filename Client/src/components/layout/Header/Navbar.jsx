import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Mybutton from "./CustomLinkButton";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SearchContainer from "./SearchTop";

const links = [
  { name: "Home", link: "/" },
  { name: "Hindi", link: "/hindi" },
  { name: "English", link: "/english" },
];
// console.log(links);

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#263238" }}>
        <Container
          style={{ backgroundColor: "#263238" }}
          className="navbar_container"
        >
          <Toolbar disableGutters>
            <Link to="/" className="logo">
              <Typography
                variant="h6"
                noWrap
                component="div"
                href="/"
                sx={{
                  mr: 2,
                  fontSize: { xs: "1.2" },
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 600,
                  letterSpacing: ".2rem",
                  color: "primary",
                  textDecoration: "none",
                }}
              >
                Hotstar
              </Typography>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "primary",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {links.map((link) => (
                  <Link
                    style={{ backgroundColor: "#263238" }}
                    key={link.name + "jk"}
                    to={link.link}
                  >
                    <MenuItem
                      className="links"
                      onClick={handleCloseNavMenu}
                      style={{ backgroundColor: "#263238" }}
                    >
                      <Typography style={{ color: "white" }} textAlign="center">
                        {link.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              <Link to="/" className="logo">
                Hotstar
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links.map((link) => (
                <Link key={link.name} to={link.link}>
                  <Mybutton
                    className="links"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {link.name}
                  </Mybutton>
                </Link>
              ))}
            </Box>

            <SearchContainer />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
