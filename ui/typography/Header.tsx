import { TypographyProps } from "../Constants";

export const Header = ({ content, color }: TypographyProps) => {
  return (
    <div>
      <h1 color={color}>{content}</h1>
    </div>
  );
};
