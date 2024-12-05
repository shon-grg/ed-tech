import { Box, Typography, Grid } from "@mui/material";
import Programs from "../../ui/Programs";

function TrainingPrograms() {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "40px" },
        backgroundColor: "#f9f9f9",
        position: "absolute",
        maxHeight: "100%",
        textAlign: "center",
        marginTop: "79px",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "24px", md: "30px" },
          mb: { xs: 3, md: 5 },
          color: "#000000",
        }}
      >
        Our Training Programs
      </Typography>

      {/* Programs Component */}
      <Grid container marginLeft="99px">
        <Grid item xs={12} sm={10} md={8}>
          <Programs />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TrainingPrograms;
