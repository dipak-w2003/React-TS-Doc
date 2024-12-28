import React from "react";

type IPROPS = {
  title?: string;
};

const PropPassing: React.FC<IPROPS> = ({ title = "Hello World 🇸🇨" }) => {
  return <main>{title}</main>;
};

export default PropPassing;
