import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ContactsIcon from "@material-ui/icons/Contacts";

const Header = () => {
  const headerItems = [
    { title: "About me", icon: <PersonIcon /> },
    { title: "Skills", icon: <BuildIcon /> },
    { title: "Projects", icon: <WorkIcon /> },
    { title: "Hobbies", icon: <BeachAccessIcon /> },
    { title: "Contacts", icon: <ContactsIcon /> },
  ];

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}
    >
      {headerItems.map((item, index) => (
        <Grid item key={`headeritem${index}`}>
          <Grid container direction="row" alignItems="center">
            <Avatar>{item.icon}</Avatar>
            <Typography style={{ marginLeft: 10 }}>{item.title}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
