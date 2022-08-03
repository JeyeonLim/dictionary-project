import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Audio
      </a>
      <h6>{props.phonetic.text}</h6>
    </div>
  );
}
