import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      {" "}
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeyword}
          className="search-input"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-warning btn-sm"
        />
      </form>{" "}
      <Result result={result} />
    </div>
  );
}
