import { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../ui/logo/Logo"; // Ensure your Logo component is accessible

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = ["Home", "Training Programs", "About Us", "Contact Us"];

  return (
    <>
      {/* AppBar for Desktop & Tablet */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#ffffff", maxWidth: "100%" }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {/* Logo */}
            <Box sx={{ mr: 2 }}>
              <Logo />
            </Box>

            {/* Nav Items for Desktop View */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                ml: "auto",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item}
                  component={Link}
                  to={item.replace(/\s+/g, "").toLowerCase()}
                  smooth={true}
                  duration={500}
                  sx={{
                    color: "#000000",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: "240px" },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={toggleDrawer(false)}
              component={Link}
              to={item.replace(/\s+/g, "").toLowerCase()}
              smooth={true}
              duration={500}
              sx={{
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
