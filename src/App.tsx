import React, { Fragment } from "react";
import {
  createMuiTheme,
  Grid,
  Typography,
  ThemeProvider,
  Chip,
  Box,
} from "@material-ui/core";
import aboutMeImage from "./assets/BP3-4245.jpg";
import "./styles.css";
import strings from "./strings";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./components/Section";
import WorldMap from "./WorldMap";
import EmailForm from "./EmailForm";
import {
  aboutMeImageData,
  backEndSkills,
  frontEndSkills,
  links,
  projectImageData,
} from "./database";
import battleShipImage from "./assets/battleship.png";
import westSeattleImage from "./assets/west-seattle.jpg";
import nurseSchedulerImage from "./assets/nurse-scheduler.jpg";
import zineMakerImage from "./assets/zine-maker.png";
import Content from "./components/Content";

const App: React.FC = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Open Sans",
    },
  });

  const projectsData = [
    {
      contentText: [strings.westSeattleAbout],
      image: westSeattleImage,
      imageData: projectImageData,
      link: links.westSeattle,
      title: strings.westSeattleTitle,
    },
    {
      contentText: [strings.battleShipAbout],
      image: battleShipImage,
      imageData: projectImageData,
      link: links.battleship,
      title: strings.battleShipTitle,
    },
    {
      contentText: [strings.zineMakerAboutOne, strings.zineMakerAboutTwo],
      image: zineMakerImage,
      imageData: projectImageData,
      link: links.zineClient,
      title: strings.zineMakerTitle,
    },
    {
      contentText: [strings.nurseSchedulerAboutOne, strings.zineMakerAboutTwo],
      image: nurseSchedulerImage,
      imageData: projectImageData,
      link: links.nurScheduler,
      title: strings.nurseSchedulerTitle,
    },
  ];

  const skillsRow = (text: string, skills: string[]) => {
    return (
      <Grid container direction="row" justify="flex-start">
        <Typography variant="h6" style={{ paddingTop: 5, marginRight: 20 }}>
          {text}
        </Typography>
        {skills.map((skill, index) => (
          <Chip
            key={`skill${index}`}
            label={skill}
            style={{ height: 40, fontSize: 15, marginRight: 20 }}
          />
        ))}
      </Grid>
    );
  };

  const skillsContent = () => {
    return (
      <Fragment>
        {skillsRow("Front end:", frontEndSkills)}
        <Box style={{ marginTop: 20 }}>
          {skillsRow("Back end:", backEndSkills)}
        </Box>
      </Fragment>
    );
  };

  const twoColumnContent = (leftColumn: any, rightColumn: any = "") => {
    return (
      <Grid container direction="row" justify="flex-start" spacing={3}>
        <Grid item xs={12} md={5}>
          {leftColumn}
        </Grid>
        <Grid item xs={12} md={5}>
          {rightColumn}
        </Grid>
      </Grid>
    );
  };

  const projectsContent = () => {
    return (
      <Fragment>
        {projectsData.map((data) => (
          <Content data={data} />
        ))}
      </Fragment>
    );
  };

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
    { title: "Skills", content: skillsContent() },
    { title: "Projects", content: projectsContent() },
    { title: "Hobbies", content: <WorldMap /> },
    { title: "Contacts", content: twoColumnContent(<EmailForm />) },
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
