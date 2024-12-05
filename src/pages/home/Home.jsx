// // import Button from "../ui/Button";
// import "./Home.css";
// function Home() {
//   return (
//     <div className="home-page">
//       <div className="homeInside">
//         <h1 className="heading">
//           <span style={{ color: "#35B2EC" }}>Transform</span> Your Career <br />{" "}
//           with Industry-Ready Skills
//         </h1>
//         <p className="para">
//           Join our training programs in Web Development, Mobile App Development,
//           UI/UX Design, Digital Marketing, Software Testing, and Data Science.
//           Learn from industry experts through hands-on projects and personalized
//           mentorship to succeed in the digital world.
//         </p>
//         <img className="img2" src="./Circles.png" alt="Circle" />
//         <img className="img1" src="./office-worker.png" alt="office Worker" />
//         <img className="rectangle" src="./Rectangle.png" alt="rectangle" />
//         <img className="img3" src="./Circles 2.png" alt="Circle-2" />
//         <button className="callNowButton">Call Now</button>
//         {/* <Button className="callNowButton">Call Now</Button> */}
//       </div>
//     </div>
//   );
// }

// export default Home;

import { Box, Button, Typography, Grid } from "@mui/material";
import Circles from "../../../public/Circles.png";
import Circles2 from "../../../public/Circles 2.png";
import OfficeWorker from "../../../public/office-worker.png";
import Rectangle from "../../../public/Rectangle.png";

function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f9f9f9",
        padding: { xs: "20px", md: "40px 80px" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section: Text Content */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "32px", md: "60px" },
              lineHeight: { xs: "1.2", md: "1.5" },
              color: "black",
              mb: 2,
            }}
          >
            <span style={{ color: "#35B2EC" }}>Transform</span> Your Career
            <br />
            with Industry-Ready Skills
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: "1.5",
              color: "black",
              mb: 3,
              maxWidth: "800px",
            }}
          >
            Join our training programs in Web Development, Mobile App
            Development, UI/UX Design, Digital Marketing, Software Testing, and
            Data Science. Learn from industry experts through hands-on projects
            and personalized mentorship to succeed in the digital world.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "178px",
              height: "45px",
              padding: "18px 37px 18px 37px",
              borderRadius: "5px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              backgroundColor: "#35B2EC",
            }}
          >
            Call Now
          </Button>
        </Grid>

        {/* Right Section: Images */}
        <Grid item xs={12} md={5} position="relative">
          <Box sx={{ position: "relative", height: "100%", display: "flex" }}>
            {/* Background Rectangle */}
            <Box
              component="img"
              src={Rectangle}
              alt="Rectangle"
              sx={{
                position: "absolute",
                width: "378px",
                height: "257px",
                left: "0",
                top: "189px",
                zIndex: 1,
              }}
            />
            {/* Office Worker Image */}
            <Box
              component="img"
              src={OfficeWorker}
              alt="Office Worker"
              sx={{
                // width: "356.73px",
                maxWidth: "356.73px",
                height: "482px",
                margin: "0 auto",
                zIndex: 2,
                marginTop: "-36px",
                marginLeft: "34px",
              }}
            />
            {/* Circle Images */}
            <Box
              component="img"
              src={Circles}
              alt="Circles"
              sx={{
                position: "absolute",
                top: "11px",
                marginLeft: "346px",
                width: "90px",
                height: "235px",
                zIndex: 3,
              }}
            />
            <Box
              component="img"
              src={Circles2}
              alt="Circles 2"
              sx={{
                position: "absolute",
                marginTop: "377px",
                marginLeft: "-130px",
                width: "235px",
                height: "90px",
                zIndex: 3,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
