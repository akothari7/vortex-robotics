import React from "react";

//Interface for props for Typography
interface TypographyProps {
  color: string;
  size: number;
  bold: boolean;
  text: string;
}

//Header component
export const Header: React.FC<TypographyProps> = (props: TypographyProps) => {
  return <h1>{props.text}</h1>;
};
