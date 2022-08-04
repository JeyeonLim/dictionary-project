import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        {" "}
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeyword}
            className="search-input"
          />
          <input type="submit" value="Search" className="button" />
        </form>{" "}
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
