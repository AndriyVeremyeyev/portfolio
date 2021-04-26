import React from "react";
import { Avatar, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles({
  linkClass: {
    marginLeft: 10,
    fontSize: 25,
    "&:hover": {
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

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
            <Link
              href={`#${item.title.toLowerCase().replace(" ", "")}`}
              color="inherit"
              className={classes.linkClass}
            >
              {item.title}
            </Link>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
