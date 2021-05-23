import React from "react";
import { Divider, Grid, Typography, useTheme } from "@material-ui/core";

type SectionProps = {
  sectionTitle: any;
  sectionContent: any;
};

const Section: React.FC<SectionProps> = (props) => {
  const { sectionTitle, sectionContent } = props;
  const theme = useTheme();
  const {
    palette: { primary },
  } = theme;

  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: "2rem" }}
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
            <Typography style={{ fontSize: "2rem" }}>{sectionTitle}</Typography>
          </Grid>
          <Grid item>
            <Divider
              variant="fullWidth"
              orientation="vertical"
              style={{ width: 2, backgroundColor: primary.light }}
            />
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
