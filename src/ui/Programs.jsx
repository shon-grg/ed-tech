import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";

const trainingProgramData = [
  {
    name: "Web Developer",
    img: "/Frame 1.png",
    description:
      "Master the essentials of modern web development with a focus on building responsive, production-grade websites and robust web applications that meet industry standards.",
    skills: [
      "HTML + CSS",
      "JavaScript",
      "React",
      "Express",
      "Node",
      "MongoDB",
      "Git",
      "Redis",
    ],
  },
  {
    name: "Mobile App Developer",
    img: "/Frame 2.png",
    description:
      "Learn to create mobile applications for Android and iOS, focusing on design, performance, and usability.",
    skills: [
      "React-Native",
      "Flutter",
      "Firebase",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
    ],
  },
  {
    name: "UI/UX Development",
    img: "/Frame 3.png",
    description:
      " Master the art and science of creating user-friendly and visually appealing digital experiences.",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    name: "Digital Marketing",
    img: "/Frame 4.png",
    description:
      "Build skills to drive brand growth and engagement through digital marketing channels.",
    skills: [
      "Google Analytics",
      "Facebook Ads ",
      "SEO tools (Ahrefs, SEMrush)",
      "Email Marketing",
      "Google Ads",
    ],
  },
  {
    name: "Software Testing",
    img: "/Frame 5.png",
    description:
      "Become proficient in ensuring software quality through testing methodologies and tools.",
    skills: ["Selenium", "JUnit", "TestNG", "Postman", "Jenkins", "Bugzilla"],
  },
  {
    name: "Data Science",
    img: "/Frame 6.png",
    description:
      "Gain expertise in data analysis, visualization, and machine learning to extract insights from data.",
    skills: [
      "Python",
      "R",
      "TensorFlow",
      "Pandas",
      "Scikit-Learn",
      "SQL",
      "Tableau",
      "Power BI",
    ],
  },
];

function Programs() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#f9f9f9",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Grid container columnSpacing={40} rowSpacing="27px" padding="10px">
        {trainingProgramData.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                boxShadow: 3,
                width: "362px",
                height: "7 99px",
              }}
            >
              {/* Program Image */}
              <CardMedia
                component="img"
                image={program.img}
                alt={program.name}
                sx={{
                  position: "absolute",
                  height: "311px",
                  width: "366px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />

              {/* Card Content */}
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                    fontWeight: 400,
                    maxwidth: "313px",
                    marginRight: "27px",
                    marginTop: "337px",
                  }}
                >
                  {program.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    position: "absolute",
                    fontWeight: 500,
                    color: "#35B2EC",
                    mb: 1,
                    fontSize: "25px",
                    marginRight: "196px",
                    marginTop: "495px",
                    lineHeight: "30.36px",
                  }}
                >
                  Tech Stack:
                </Typography>
                <List
                  style={{
                    position: "absolute",
                    marginTop: "521px",
                    lineHeight: "10px",
                  }}
                >
                  {program.skills.map((skill, skillIndex) => (
                    <ListItem
                      key={skillIndex}
                      sx={{
                        fontWeight: 500,
                        fontSize: "20px",
                        // padding: "0 0 4px 0",
                      }}
                    >
                      • {skill}
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              {/* Apply Button */}
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "5px",
                    textTransform: "none",
                    fontWeight: 600,
                    width: "178px",
                    height: "45px",
                    marginTop: "732px",
                    backgroundColor: " #35B2EC",
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Programs;
