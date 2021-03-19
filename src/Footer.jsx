import React from "react";
import { Grid, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  const footerItem = (link, icon) => {
    return (
      <Grid item style={{ marginLeft: 20 }}>
        <Link href={link} target="_blank" color="inherit">
          {icon}
        </Link>
      </Grid>
    );
  };

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

export default Footer;
