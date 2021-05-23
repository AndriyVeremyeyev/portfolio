import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ContactsIcon from "@material-ui/icons/Contacts";
import LinkWrapper from "./components/LinkWrapper";

const Header: React.FC = () => {
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
      justify="space-around"
      style={{ marginTop: "2rem" }}
    >
      {headerItems.map((item, index) => (
        <Grid item key={`headeritem${index}`}>
          <Grid container direction="row" alignItems="center">
            <Avatar style={{ marginRight: "1rem" }}>{item.icon}</Avatar>
            <LinkWrapper
              blank={false}
              link={`#${item.title.toLowerCase().replace(" ", "")}`}
            >
              <Typography style={{ fontSize: "1.3rem" }}>
                {item.title}
              </Typography>
            </LinkWrapper>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
