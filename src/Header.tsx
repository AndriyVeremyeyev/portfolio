import React from "react";
import { Avatar, Grid, Typography, useTheme } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ContactsIcon from "@material-ui/icons/Contacts";
import LinkWrapper from "./components/LinkWrapper";

const Header: React.FC = () => {
  const theme = useTheme();
  const {
    palette: { primary },
  } = theme;
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
      justify="space-between"
      style={{
        marginTop: "1rem",
        padding: "0 0.5rem",
      }}
      xl={7}
    >
      {headerItems.map((item, index) => (
        <Grid
          item
          key={`headerItem${index}`}
          xs={12}
          sm={2}
          style={{ marginTop: "1rem" }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
          >
            <Grid item>
              {" "}
              <Avatar
                style={{ marginRight: "1rem", backgroundColor: primary.dark }}
              >
                {item.icon}
              </Avatar>
            </Grid>
            <Grid item>
              {" "}
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
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
