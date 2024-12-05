import { Box, Typography, List, ListItem } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "#f9f9f9",
        padding: { xs: "20px", md: "40px" },
        textAlign: "center",
        width: "100%",
        height: "503px",
        marginTop: "1900px",
      }}
    >
      {/* About Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "black",
          mb: 4,
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        About Us
      </Typography>

      {/* About Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "1160px",
          maxHeight: "420px",
          margin: "0 auto",
          fontSize: "16px",
          lineHeight: "19.36px",
          color: "black",
          marginLeft: "174px",
          textAlign: "left",
        }}
      >
        At <span style={{ color: "#35B2EC" }}>WebSoulLabs</span>, we are
        dedicated to empowering individuals with the skills and knowledge needed
        to excel in today’s fast-evolving tech landscape. Our mission is to
        bridge the gap between academic learning and industry requirements by
        providing hands-on, practical training led by experienced professionals.
        <br />
        <br />
        We offer comprehensive programs across Web Development, Mobile App
        Development, UI/UX Design, Digital Marketing, Software Testing, and Data
        Science. Each course is designed to equip students with in-demand
        skills, real-world experience, and industry insights, preparing them for
        successful careers in technology.
        <br />
        <br />
        Our approach is simple yet effective: immersive, project-based learning
        with personalized mentorship. Whether you’re a beginner or an
        experienced professional looking to upgrade your skills, we provide a
        supportive environment that encourages growth, innovation, and mastery.
        <br />
        <br />
        Join us to unlock new opportunities, expand your professional
        capabilities, and become part of a thriving community of tech
        enthusiasts and industry leaders.
        <br />
        <br />
        <span style={{ color: "#35B2EC", marginLeft: "174pxpx" }}>
          Why Choose Us?
        </span>
      </Typography>
      <List
        sx={{
          maxWidth: "800px",
          margin: "20px auto",
          textAlign: "left",
          color: "black",
          marginLeft: "174px",
        }}
      >
        <ListItem sx={{ padding: 0, mb: 1 }}>
          • Expert Instructors: Learn from skilled professionals with years of
          industry experience.
        </ListItem>
        <ListItem sx={{ padding: 0, mb: 1 }}>
          • Hands-On Projects: Work on real-world projects that mirror industry
          challenges.
        </ListItem>
        <ListItem sx={{ padding: 0, mb: 1, whiteSpace: "nowrap" }}>
          • Career Support: Access mentorship, networking opportunities, and job
          preparation resources to help you succeed beyond the classroom.
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          • Flexible Learning: Our courses are designed to fit around your
          schedule with online and on-site options.
        </ListItem>
      </List>

      {/* Closing Statement */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "100%",
          // margin: "0px auto",
          marginRight: "174px",
          fontSize: "16px",
          lineHeight: 1.6,
          color: "black",
        }}
      >
        At <span style={{ color: "#35B2EC" }}>WebSoulLabs</span>, we are more
        than just a training center—we’re your partner in shaping a future that
        keeps pace with technology.
      </Typography>
    </Box>
  );
}

export default About;
