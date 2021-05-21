import React from "react";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const useStyles = makeStyles({
  linkClass: {
    marginLeft: 10,
    fontSize: 25,
    "&:hover": {
      color: "red",
    },
  },
});

type ContentData = {
  contentText: string[];
  image: any;
  link: string;
  title: string;
};

type ContentProps = {
  data: ContentData;
};

const Content: React.FC<ContentProps> = (props) => {
  const {
    data: { contentText, image, link, title },
  } = props;
  const classes = useStyles();

  const bounceInAnimation = keyframes`${bounceIn}`;

  const BounceInDiv = styled.div`
    animation: 5s ${bounceInAnimation};
  `;

  const wrapImage = (img: any) => {
    return {
      backgroundImage: `url(${img}
        )`,
      backgroundSize: "cover",
      height: "25rem",
    };
  };

  return (
    <Grid container direction="row" justify="flex-start" spacing={3}>
      <Grid item xs={12} md={5}>
        <BounceInDiv>
          <Link href={link} target="_blank" color="inherit">
            <Box style={wrapImage(image)}></Box>
          </Link>
        </BounceInDiv>
        ,
      </Grid>
      <Grid item xs={12} md={5}>
        <Link
          href={link}
          target="_blank"
          color="inherit"
          className={classes.linkClass}
        >
          <Typography variant="h5">{title}</Typography>
        </Link>
        <Box style={{ marginTop: 20 }}>
          {contentText.map((text: string, index: number) => (
            <Typography
              key={`text${index}`}
              variant="h6"
              style={{ marginTop: 15 }}
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
