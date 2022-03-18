import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../components/SearchResult";
import "./assets/Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search__info">
        <p>62 stays •26 Aubugst to 30 august • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibilty</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult />
    </div>
  );
}

export default Search;
