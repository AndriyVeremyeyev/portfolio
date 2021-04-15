import React from "react";
import { VectorMap } from "react-jvectormap";
import { Box } from "@material-ui/core";
import { mapData } from "./data";

const WorldMap = () => {
  return (
    <Box style={{ marginTop: 50 }}>
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
  );
};

export default WorldMap;
