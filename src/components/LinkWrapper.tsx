import React from "react";
import { Link } from "@material-ui/core";
import "./linkWrapper.css";

type LinkWrapperProps = {
  link: string;
  blank: boolean;
  children: JSX.Element | string;
};

const LinkWrapper: React.FC<LinkWrapperProps> = (props) => {
  const { blank, link, children } = props;

  return (
    <Link
      href={link}
      target={blank ? "_blank" : undefined}
      // color="inherit"
      className="link link--elara"
    >
      <span>{children}</span>
    </Link>
  );
};

export default LinkWrapper;
