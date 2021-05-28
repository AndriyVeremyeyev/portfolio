import React, { Fragment } from "react";
import { Grid, Typography, Chip, useTheme } from "@material-ui/core";
import { backEndSkills, frontEndSkills } from "./util/database";

const Skills: React.FC = () => {
  const theme = useTheme();
  const {
    palette: { primary },
  } = theme;

  const skillsRow = (title: string, skills: string[]) => {
    return (
      <Grid container direction="row">
        <Grid item xs={3} md={2}>
          <Typography
            style={{
              paddingTop: "1rem",
              marginRight: "1rem",
              fontSize: "1.3rem",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={9} md={10}>
          <Grid container direction="row">
            {skills.map((skill, index) => (
              <Grid item style={{ marginTop: "1rem" }}>
                <Chip
                  color="primary"
                  key={`skill${index}`}
                  label={skill}
                  style={{
                    height: "2.5rem",
                    fontSize: "1rem",
                    marginRight: "1rem",
                    backgroundColor: primary.light,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Fragment>
      {skillsRow("Front-end: ", frontEndSkills)}
      {skillsRow("Back-end: ", backEndSkills)}
    </Fragment>
  );
};

export default Skills;
