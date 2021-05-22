import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

type SectionProps = {
  sectionTitle: any;
  sectionContent: any;
};

const Section: React.FC<SectionProps> = (props) => {
  const { sectionTitle, sectionContent } = props;
  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: 30 }}
      justify="flex-start"
      spacing={3}
    >
      <Grid item xs={12} sm={3} md={2} xl={1}>
        <Grid
          container
          direction="row"
          justify="space-between"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Typography variant="h4">{sectionTitle}</Typography>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" style={{ width: 2 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={9} md={10} xl={6}>
        {sectionContent}
      </Grid>
    </Grid>
  );
};

export default Section;
