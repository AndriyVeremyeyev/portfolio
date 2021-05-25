import React from "react";
import { createMuiTheme, Box, ThemeProvider } from "@material-ui/core";
import aboutMeImage from "./assets/BP3-4245.jpg";
import "./styles.css";
import strings from "./util/strings";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./components/Section";
import WorldMap from "./WorldMap";
import EmailForm from "./EmailForm";
import { aboutMeImageData } from "./util/database";

import Content from "./components/Content";
import { blueGrey, lightBlue } from "@material-ui/core/colors";
import Skills from "./Skills";
import Projects from "./Projects";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[200],
      main: lightBlue[500],
      dark: lightBlue[800],
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[800],
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

const App: React.FC = () => {
  const sectionsData = [
    {
      title: "About me",
      content: (
        <Content
          data={{
            contentText: [strings.aboutMeOne, strings.aboutMeTwo],
            image: aboutMeImage,
            imageData: aboutMeImageData,
            link: "",
            title: "",
          }}
        />
      ),
    },
    { title: "Skills", content: <Skills /> },
    { title: "Projects", content: <Projects /> },
    { title: "Hobbies", content: <WorldMap /> },
    {
      title: "Contacts",
      content: (
        <Box style={{ width: "60%" }}>
          <EmailForm />{" "}
        </Box>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {sectionsData.map((section, index) => (
        <Box
          id={section.title.toLowerCase().replace(" ", "")}
          key={`section${index}`}
        >
          <Section
            sectionTitle={section.title}
            sectionContent={section.content}
          />
        </Box>
      ))}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
