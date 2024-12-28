import React from "react";
type btnAttr = {
  title?: string;
  classStyle?: string;
};
const SimpleButton: React.FC<btnAttr> = ({ title = "Button", classStyle }) => {
  return <button className={classStyle}>{title}</button>;
};

export default SimpleButton;
