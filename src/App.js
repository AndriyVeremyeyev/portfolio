import React from "react";
import { VectorMap } from "react-jvectormap";
import {
  Avatar,
  createMuiTheme,
  Grid,
  Typography,
  ThemeProvider,
  Link,
  CardMedia,
  Card,
  Box,
  Divider,
  Chip,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ContactsIcon from "@material-ui/icons/Contacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import face from "./assets/BP3-4245.jpg";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import strings from "./strings";

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

  const skills = [
    "JavaScript",
    "C#",
    "React",
    "Redux",
    "TypeScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
  ];

  const springCard = (springCardClass) => {
    return (
      <animated.div
        class={springCardClass}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    );
  };

  const mapData = {
    BE: 0,
    BH: 0,
    BY: 0,
    CA: 0,
    DE: 0,
    IT: 0,
    FR: 0,
    GB: 0,
    GR: 0,
    KZ: 0,
    LU: 0,
    NL: 0,
    RU: 0,
    RS: 0,
    SA: 0,
    TR: 0,
    UA: 0,
    US: 0,
  };

  const map = () => {
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px",
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selectedHover: {},
          }}
          series={{
            regions: [
              {
                values: mapData,
                scale: ["#0071A4"],
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </div>
    );
  };

  const headerItem = (title, icon) => {
    return (
      <Grid container direction="row" alignItems="center">
        <Avatar>{icon}</Avatar>
        <Typography style={{ marginLeft: 10 }}>{title}</Typography>
      </Grid>
    );
  };

  const header = () => {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        style={{ marginTop: 50 }}
      >
        <Grid item>{headerItem("About me", <PersonIcon />)}</Grid>
        <Grid item>{headerItem("Skills", <BuildIcon />)}</Grid>
        <Grid item>{headerItem("Projects", <WorkIcon />)}</Grid>
        <Grid item>{headerItem("Hobbies", <BeachAccessIcon />)}</Grid>
        <Grid item>{headerItem("Contacts", <ContactsIcon />)}</Grid>
      </Grid>
    );
  };

  const footerItem = (link, icon) => {
    return (
      <Grid item style={{ marginLeft: 20 }}>
        <Link href={link} target="_blank" color="inherit">
          {icon}
        </Link>
      </Grid>
    );
  };

  const footer = () => {
    return (
      <Grid
        container
        direction="row"
        justify="flex-end"
        style={{ marginTop: 50 }}
      >
        {footerItem(
          "https://github.com/AndriyVeremyeyev",
          <GitHubIcon fontSize="large" />
        )}
        {footerItem(
          "https://www.linkedin.com/in/andriy-veremyeyev/",
          <LinkedInIcon fontSize="large" />
        )}
        {footerItem(
          "https://www.facebook.com/andriy.veremyeyev/",
          <FacebookIcon fontSize="large" />
        )}
        {footerItem("", <EmailIcon fontSize="large" />)}
      </Grid>
    );
  };

  const skillsContent = () => {
    return (
      <Grid container direction="row" justify="flex-start">
        {skills.map((skill, index) => {
          return (
            <Chip
              key={index}
              label={skill}
              style={{ height: 40, fontSize: 15, marginRight: 20 }}
            />
          );
        })}
      </Grid>
    );
  };

  const section = (sectionTitle, sectionContent) => {
    return (
      <Grid
        container
        direction="row"
        style={{ marginTop: 30 }}
        justify="center"
        spacing={3}
      >
        <Grid item xs={2}>
          <Grid
            container
            direction="row"
            justify="space-between"
            style={{ height: "100%" }}
          >
            <Grid item style={{ paddingLeft: 15 }}>
              <Typography variant="h4">{sectionTitle}</Typography>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" style={{ width: 2 }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          {sectionContent}
        </Grid>
      </Grid>
    );
  };

  const twoColumnContent = (leftColumn, rightColumn) => {
    return (
      <Grid container row justify="flex-start" spacing={3}>
        <Grid item xs={12} sm={5}>
          {leftColumn}
        </Grid>
        <Grid item xs={12} sm={5}>
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

  const contentText = (textOne, textTwo = "") => {
    return (
      <React.Fragment>
        <Typography variant="h6">{textOne}</Typography>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          {textTwo}
        </Typography>
      </React.Fragment>
    );
  };

  const aboutMeText = contentText(strings.aboutMeOne, strings.aboutMeTwo);
  const aboutMeContent = twoColumnContent(aboutMeImage(), aboutMeText);

  const westSeattleContent = twoColumnContent(
    springCard("card west__seattle"),
    contentText("West Seattle Bikes")
  );

  const zineMakerContent = twoColumnContent(
    springCard("card zine__maker"),
    contentText("Zine Maker")
  );

  const nurseSchedulerContent = twoColumnContent(
    springCard("card nurse__scheduler"),
    contentText("Nurse Scheduler")
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

  return (
    <ThemeProvider theme={theme}>
      {header()}
      {section("About me", aboutMeContent)}
      {section("Skills", skillsContent())}
      {section("Projects", projectsContent())}
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
      <Box style={{ marginTop: 50 }}>{map()}</Box>
      {footer()}
    </ThemeProvider>
  );
}

export default App;
