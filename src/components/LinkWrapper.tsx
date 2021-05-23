import React from "react";
import { Link, useTheme } from "@material-ui/core";
import "./linkWrapper.css";

type LinkWrapperProps = {
  link: string;
  blank: boolean;
  children: JSX.Element | string;
};

const LinkWrapper: React.FC<LinkWrapperProps> = (props) => {
  const { blank, link, children } = props;
  const theme = useTheme();
  const {
    palette: { primary },
  } = theme;

  return (
    <Link
      href={link}
      target={blank ? "_blank" : undefined}
      className="link link--elara"
      style={{ color: primary.dark }}
    >
      <span>{children}</span>
    </Link>
  );
};

export default LinkWrapper;
