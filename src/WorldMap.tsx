import React, { Fragment } from "react";
import { VectorMap } from "react-jvectormap";
import { Box, Typography } from "@material-ui/core";
import { mapData } from "./util/database";
import strings from "./util/strings";

const WorldMap: React.FC = () => {
  return (
    <Fragment>
      <Typography style={{ fontSize: "1.1rem" }}>{strings.hobbies}</Typography>
      <Box style={{ marginTop: "2rem" }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px",
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selectedHover: {},
          }}
          series={{
            regions: [
              {
                values: mapData,
                scale: ["#0071A4"],
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </Box>
    </Fragment>
  );
};

export default WorldMap;
