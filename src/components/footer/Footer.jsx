import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "#3d3d3db0",
        width: "100% ",
        height: "94px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2929px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#ffffff",
          fontWeight: 500,
          fontSize: { xs: "12px", md: "15px" },
        }}
      >
        © 2025 WebSoulLabs. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
