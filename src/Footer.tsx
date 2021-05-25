import React from "react";
import { Grid, Link, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.dark,
    height: "3rem",
    width: "3rem",
  },
  github: {
    paddingTop: "0.1rem",
    height: "2.5rem",
    width: "2.5rem",
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  const footerItems = [
    {
      link: "https://github.com/AndriyVeremyeyev",
      icon: <GitHubIcon className={`${classes.link} ${classes.github}`} />,
    },
    {
      link: "https://www.linkedin.com/in/andriy-veremyeyev/",
      icon: <LinkedInIcon className={classes.link} />,
    },
    {
      link: "https://www.facebook.com/andriy.veremyeyev/",
      icon: <FacebookIcon className={classes.link} />,
    },
  ];

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      style={{ marginTop: "3rem", paddingRight: "1rem" }}
      xl={7}
    >
      {footerItems.map((item, index) => (
        <Grid key={`footerItem${index}`} item style={{ marginLeft: "3rem" }}>
          <Link href={item.link} target="_blank" color="inherit">
            {item.icon}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
