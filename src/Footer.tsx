import React from "react";
import { Grid, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer: React.FC = () => {
  const footerItems = [
    {
      link: "https://github.com/AndriyVeremyeyev",
      icon: <GitHubIcon style={{ height: 30, width: 30, paddingTop: 2 }} />,
    },
    {
      link: "https://www.linkedin.com/in/andriy-veremyeyev/",
      icon: <LinkedInIcon fontSize="large" />,
    },
    {
      link: "https://www.facebook.com/andriy.veremyeyev/",
      icon: <FacebookIcon fontSize="large" />,
    },
  ];

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      style={{ marginTop: 50, paddingRight: 50 }}
    >
      {footerItems.map((item, index) => (
        <Grid key={`footerItem${index}`} item style={{ marginLeft: 50 }}>
          <Link href={item.link} target="_blank" color="inherit">
            {item.icon}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
