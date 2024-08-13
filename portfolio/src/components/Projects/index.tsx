import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box
      component={"section"}
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        Projects
      </Typography>
    </Box>
  );
};

export default Projects;
