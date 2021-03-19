import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ContactsIcon from "@material-ui/icons/Contacts";

const Header = () => {
  const headerItem = (title, icon) => {
    return (
      <Grid container direction="row" alignItems="center">
        <Avatar>{icon}</Avatar>
        <Typography style={{ marginLeft: 10 }}>{title}</Typography>
      </Grid>
    );
  };

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

export default Header;
