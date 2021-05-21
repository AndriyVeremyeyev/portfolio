import React, { Fragment } from "react";
import {
  createMuiTheme,
  Grid,
  Typography,
  ThemeProvider,
  Chip,
  Box,
} from "@material-ui/core";
import face from "./assets/BP3-4245.jpg";
import "./styles.css";
import strings from "./strings";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import WorldMap from "./WorldMap";
import EmailForm from "./EmailForm";
import { frontEndSkills, backEndSkills, links } from "./data";
import battleShip from "./assets/battleship.png";
import westSeattle from "./assets/west-seattle.jpg";
import nurseScheduler from "./assets/nurse-scheduler.jpg";
import zineMaker from "./assets/zine-maker.png";
import Content from "./Content";

const App: React.FC = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Open Sans",
    },
  });

  const imageStyle = {
    backgroundImage: `url(${face}
  )`,
    backgroundPosition: "0 10%",
    backgroundSize: "cover",
    height: 600,
  };

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

  const aboutMeImage = () => {
    return <Box style={imageStyle}></Box>;
  };

  const contentText = (
    textOne = "",
    textOneSize: any = "h5",
    textTwo = [""],
    textTwoSize: any = "h6"
  ) => {
    return (
      <Fragment>
        <Typography variant={textOneSize}>{textOne}</Typography>
        <Box style={{ marginTop: 20 }}>
          {textTwo.map((text, index) => (
            <Typography
              key={`text${index}`}
              variant={textTwoSize}
              style={{ marginTop: 15 }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Fragment>
    );
  };

  const aboutMeText = contentText(
    "",
    "h5",
    [strings.aboutMeOne, strings.aboutMeTwo],
    "h6"
  );
  const aboutMeContent = twoColumnContent(aboutMeImage(), aboutMeText);

  const projectsData = [
    {
      contentText: [strings.westSeattleAbout],
      image: westSeattle,
      link: links.westSeattle,
      title: strings.westSeattleTitle,
    },
    {
      contentText: [strings.battleShipAbout],
      image: battleShip,
      link: links.battleship,
      title: strings.battleShipTitle,
    },
    {
      contentText: [strings.zineMakerAboutOne, strings.zineMakerAboutTwo],
      image: zineMaker,
      link: links.zineClient,
      title: strings.zineMakerTitle,
    },
    {
      contentText: [strings.nurseSchedulerAboutOne, strings.zineMakerAboutTwo],
      image: nurseScheduler,
      link: links.nurScheduler,
      title: strings.nurseSchedulerTitle,
    },
  ];

  const projectsContent = () => {
    return (
      <Fragment>
        {projectsData.map((data) => (
          <Content data={data} />
        ))}
      </Fragment>
    );
  };

  const sections = [
    { title: "About me", content: aboutMeContent },
    { title: "Skills", content: skillsContent() },
    { title: "Projects", content: projectsContent() },
    { title: "Hobbies", content: <WorldMap /> },
    { title: "Contacts", content: twoColumnContent(<EmailForm />) },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {sections.map((section, index) => (
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
