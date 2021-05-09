import { TypographyProps } from "../Constants";
import React from "react";

export const Header: React.FC<TypographyProps> = (props: TypographyProps) => {
  return <h1>{props.text}</h1>;
};
