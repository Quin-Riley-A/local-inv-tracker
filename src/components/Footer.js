import React from "react";
import kettleFooter from "./../img/copper-kettle.jpg";

export default function Footer() {
  return (
    <React.Fragment>
      <h3>Made by Quin-Riley, 2023</h3>
      <img src={kettleFooter} alt="copper kettle" />
      <p>Image sourcing and rights information available in readme.md</p>
    </React.Fragment>
  );
}