import React from "react";
import { Link } from "@material-ui/core";
import "./linkWrapper.css";

type LinkWrapperProps = {
  link: string;
  children: JSX.Element | string;
};

const LinkWrapper: React.FC<LinkWrapperProps> = (props) => {
  const { link, children } = props;

  return (
    <Link
      href={link}
      target="_blank"
      color="inherit"
      className="link link--elara"
    >
      <span>{children}</span>
    </Link>
  );
};

export default LinkWrapper;
