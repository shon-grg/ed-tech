import { Box, Typography, Stack } from "@mui/material";
// import CallIcon from "@mui/icons-material/Call";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "#35B2EC",
        padding: { xs: "20px", md: "40px" },
        color: "#ffffff",
        textAlign: "center",
        width: "100%",
        height: "471px",
        marginTop: "2458px",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 4,
          fontSize: { xs: "24px", md: "35px" },
          marginTop: "53px",
          lineHeight: "42.36px",
        }}
      >
        Connect with Us to Start Your Journey
      </Typography>

      {/* Contact Details */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        {/* Call Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          style={{ marginTop: "91px" }}
        >
          <img
            src="../call-icon.png"
            alt="call-icon"
            style={{
              fontSize: "20px",
              width: "80px",
              height: "80px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "24.2px",
            }}
          >
            +91 88484305656, +91 7356189747
          </Typography>
        </Stack>

        {/* Location Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          style={{ marginTop: "91px" }}
        >
          <img
            src="../location-icon.png"
            alt="location-icon"
            style={{
              fontSize: "20px",
              width: "80px",
              height: "80px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            14/291 K, Suite 75D, 1st Floor A
            <br />
            Square, Edathala, PO,
            <br />
            Kuzhivelippady, Kochi, Kerala 683561
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact;
