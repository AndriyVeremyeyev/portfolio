import React, { Fragment } from "react";
import { Grid, Typography, Chip, Box } from "@material-ui/core";
import { backEndSkills, frontEndSkills } from "./util/database";

const Skills: React.FC = () => {
  const skillsRow = (text: string, skills: string[]) => {
    return (
      <Grid container direction="row" justify="flex-start">
        <Typography
          style={{
            paddingTop: "0.1rem",
            marginRight: "1rem",
            fontSize: "1.3rem",
          }}
        >
          {text}
        </Typography>
        {skills.map((skill, index) => (
          <Chip
            key={`skill${index}`}
            label={skill}
            style={{ height: 40, fontSize: 15, marginRight: 20 }}
          />
        ))}
      </Grid>
    );
  };

  return (
    <Fragment>
      {skillsRow("Front end:", frontEndSkills)}
      <Box style={{ marginTop: 20 }}>
        {skillsRow("Back end:", backEndSkills)}
      </Box>
    </Fragment>
  );
};

export default Skills;
