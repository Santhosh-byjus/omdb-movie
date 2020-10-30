import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section">
      <br></br>
      <p>or</p>
      <h4>Search for a movie :</h4>
      <InputGroup>
        <Input
          placeholder=" Search movie name..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button color="success" onClick={onClickSearch}>
          Search
        </Button>
      </InputGroup>
    </section>
  );
}