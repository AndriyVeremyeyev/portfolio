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
import { grey, indigo } from "@material-ui/core/colors";
import Skills from "./Skills";
import Projects from "./Projects";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[200],
      main: indigo[500],
      dark: indigo[800],
    },
    secondary: grey,
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
        <div id={section.title.toLowerCase().replace(" ", "")}>
          <Section
            key={`section${index}`}
            sectionTitle={section.title}
            sectionContent={section.content}
          />
        </div>
      ))}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
