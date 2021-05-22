import React from "react";
import { Box } from "@material-ui/core";
import { ImageData } from "../types";

type ImageWrapperProps = {
  image: any;
  imageData: ImageData;
};

const ImageWrapper: React.FC<ImageWrapperProps> = (props) => {
  const { image, imageData } = props;

  const handleImageStyle = (img: any) => {
    return {
      backgroundImage: `url(${img}
        )`,
      backgroundSize: "cover",
      backgroundPosition: `${imageData.backgroundPosition[0]}% ${imageData.backgroundPosition[1]}%`,
      height: `${imageData.height}rem`,
    };
  };

  return <Box style={handleImageStyle(image)}></Box>;
};

export default ImageWrapper;
