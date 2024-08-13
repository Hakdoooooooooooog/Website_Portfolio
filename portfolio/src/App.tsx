import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import About from "./components/About";
import Projects from "./components/Projects";
import { Container } from "@mui/material";
import Contacts from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container
          classes={{
            root: "app__container",
          }}
          maxWidth="lg"
        >
          <About />
          <Projects />
          <Contacts />
        </Container>
      </main>
    </>
  );
}

export default App;
