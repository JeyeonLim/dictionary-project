import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <li>{definition.definition}</li> <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}