import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

const Section = ({ sectionTitle, sectionContent }) => {
  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: 30 }}
      justify="center"
      spacing={3}
    >
      <Grid item xs={2}>
        <Grid
          container
          direction="row"
          justify="space-between"
          style={{ height: "100%" }}
        >
          <Grid item style={{ paddingLeft: 15 }}>
            <Typography variant="h4">{sectionTitle}</Typography>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" style={{ width: 2 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        {sectionContent}
      </Grid>
    </Grid>
  );
};

export default Section;
