import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      component={"section"}
      id="aboutme"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        About Me
      </Typography>
    </Box>
  );
};

export default About;
