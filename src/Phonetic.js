import React from "react";
import "./Phonetic.css";
export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Audio
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
