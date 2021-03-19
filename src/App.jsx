import React, { useState } from "react";
import {
  createMuiTheme,
  Grid,
  Typography,
  ThemeProvider,
  CardMedia,
  Card,
  Chip,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import face from "./assets/BP3-4245.jpg";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import strings from "./strings";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import WorldMap from "./WorldMap";
import { skills } from "./data";
import * as emailjs from "emailjs-com";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Open Sans",
    },
  });

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const springCard = (springCardClass) => {
    return (
      <animated.div
        className={springCardClass}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    );
  };

  const skillsContent = () => {
    return (
      <Grid container direction="row" justify="flex-start">
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

  const twoColumnContent = (leftColumn, rightColumn = "") => {
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
    return (
      <Card>
        <CardMedia image={face} style={{ height: 600 }} />
      </Card>
    );
  };

  const contentText = (
    textOne = "",
    textOneSize = "h5",
    textTwo = [""],
    textTwoSize = "h6"
  ) => {
    return (
      <React.Fragment>
        <Typography variant={textOneSize}>{textOne}</Typography>
        <Box style={{ marginTop: 20 }}>
          {textTwo.map((text, index) => (
            <Typography
              key={`text${index}`}
              variant={textTwoSize}
              style={{ marginTop: 10 }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </React.Fragment>
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

  const zineMakerContent = twoColumnContent(
    springCard("card zine__maker"),
    contentText("Zine Maker", "h5", [
      strings.zineMakerAboutOne,
      strings.zineMakerAboutTwo,
    ])
  );

  const nurseSchedulerContent = twoColumnContent(
    springCard("card nurse__scheduler"),
    contentText("Nurse Scheduler", "h5", [strings.nurseSchedulerAbout])
  );

  const projectsContent = () => {
    return (
      <React.Fragment>
        <Grid item>{westSeattleContent}</Grid>
        <Grid item style={{ marginTop: 30 }}>
          {zineMakerContent}
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          {nurseSchedulerContent}
        </Grid>
      </React.Fragment>
    );
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailForm = () => {
    return (
      <Grid container direction="column">
        <Typography>Your name</Typography>
        <TextField
          variant="outlined"
          label="Joe Soap"
          style={{ marginTop: 10 }}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography style={{ marginTop: 10 }}>Email address</Typography>
        <TextField
          variant="outlined"
          label="you@yourdomain.com"
          style={{ marginTop: 10 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography style={{ marginTop: 10 }}>Subject</Typography>
        <TextField
          variant="outlined"
          label="Subject"
          style={{ marginTop: 10 }}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Typography style={{ marginTop: 10 }}>Message</Typography>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          label="How I can help?"
          style={{ marginTop: 10 }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          onClick={(e) => sendEmail(e)}
        >
          Send
        </Button>
      </Grid>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      subject: subject,
      message_html: message,
    };

    emailjs.send(
      "service_r80rhn8",
      "template_48uwkv8",
      templateParams,
      "user_qNzdA0MA8Q5xTka6tyqBP"
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sections = [
    { title: "About me", content: aboutMeContent },
    { title: "Skills", content: skillsContent() },
    { title: "Projects", content: projectsContent() },
    { title: "Contacts", content: twoColumnContent(emailForm()) },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {sections.map((section, index) => (
        <Section
          key={`section${index}`}
          sectionTitle={section.title}
          sectionContent={section.content}
        />
      ))}
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: 20 }}
      >
        <Typography variant="h4">Hobbies</Typography>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          I like to spent time with my family, like travel, hiking, snowboarding
        </Typography>
      </Grid>
      <WorldMap />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
