import React from "react";
import Styles from "./Heading.module.css";

function Heading(props: { text: string }) {
  return (
    <h2 className={`${Styles.heading} w-full uppercase px-2`}>{props.text}</h2>
  );
}

export default Heading;
