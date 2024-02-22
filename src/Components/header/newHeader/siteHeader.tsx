import React from "react";
import { Content } from "../content/content";
import MainNavBar from "../navbar/navbar";
import "./newHeader.style.css";

export const Header = () => {
  return (
    <div className="header">
      <MainNavBar/>
      <Content />
    </div>
  );
};
