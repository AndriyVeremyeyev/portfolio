import React from "react";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import ImageWrapper from "./ImageWrapper";
import { ImageData } from "../util/types";
import LinkWrapper from "./LinkWrapper";

type ContentData = {
  contentText: string[];
  image: any;
  imageData: ImageData;
  link: string;
  title: string;
};

type ContentProps = {
  data: ContentData;
};

const Content: React.FC<ContentProps> = (props) => {
  const {
    data: { contentText, image, imageData, link, title },
  } = props;

  const bounceInAnimation = keyframes`${bounceIn}`;

  const BounceInDiv = styled.div`
    animation: 5s ${bounceInAnimation};
  `;

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      <Grid item xs={12} md={4}>
        {link.length ? (
          <BounceInDiv>
            <Link href={link} target="_blank" color="inherit">
              <ImageWrapper image={image} imageData={imageData} />
            </Link>
          </BounceInDiv>
        ) : (
          <ImageWrapper image={image} imageData={imageData} />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        {title.length ? (
          <LinkWrapper blank link={link}>
            <Typography style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
              {title}
            </Typography>
          </LinkWrapper>
        ) : null}
        <Box style={{ marginTop: "1rem" }}>
          {contentText.map((text: string, index: number) => (
            <Typography
              key={`text${index}`}
              style={{ marginTop: "1rem", fontSize: "1.1rem" }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Content;
