import React from "react";
import { Box } from "@material-ui/core";
import { ImageData } from "../types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  someImage: {
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
});

type ImageWrapperProps = {
  image: any;
  imageData: ImageData;
};

const ImageWrapper: React.FC<ImageWrapperProps> = (props) => {
  const { image, imageData } = props;
  const classes = useStyles();

  const handleImageStyle = (img: any) => {
    return {
      backgroundImage: `url(${img}
        )`,
      backgroundSize: "cover",
      backgroundPosition: `${imageData.backgroundPosition[0]}% ${imageData.backgroundPosition[1]}%`,
      height: `${imageData.height}rem`,
    };
  };

  return (
    <Box className={classes.someImage} style={handleImageStyle(image)}></Box>
  );
};

export default ImageWrapper;
