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
import { useSpring, animated } from "react-spring";
import "./styles.css";
import strings from "./strings";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import WorldMap from "./WorldMap";
import EmailForm from "./EmailForm";
import { frontEndSkills, backEndSkills } from "./data";

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

  const calc = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans: any = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const springCard = (springCardClass: any) => {
    return (
      <animated.div
        className={springCardClass}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    );
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

  const aboutMeText = contentText("", "h5", [
    strings.aboutMeOne,
    strings.aboutMeTwo,
  ]);
  const aboutMeContent = twoColumnContent(aboutMeImage(), aboutMeText);

  const westSeattleContent = twoColumnContent(
    springCard("card west__seattle"),
    contentText("West Seattle Bikes", "h5", [strings.westSeattleAbout])
  );

  const battleshipContent = twoColumnContent(
    springCard("card battleship"),
    contentText("BattleShip", "h5", [strings.battleShipAbout])
  );

  const zineMakerContent = twoColumnContent(
    springCard("card zine__maker"),
    contentText("Zine Maker", "h5", [
      strings.zineMakerAboutOne,
      strings.zineMakerAboutTwo,
    ])
  );

  const nurseSchedulerContent = twoColumnContent(
    springCard("card nurse__scheduler"),
    contentText("Nurse Scheduler", "h5", [
      strings.nurseSchedulerAboutOne,
      strings.nurseSchedulerAboutTwo,
    ])
  );

  const projectsContent = () => {
    return (
      <React.Fragment>
        <Grid item>{westSeattleContent}</Grid>
        <Grid item style={{ marginTop: 30 }}>
          {battleshipContent}
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          {zineMakerContent}
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          {nurseSchedulerContent}
        </Grid>
      </React.Fragment>
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
