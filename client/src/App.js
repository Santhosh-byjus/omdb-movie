import React, { useState } from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import { BrowserRouter as Link } from "react-router-dom";

import SearchSection from "./components/SearchSection";

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState({});

  function onChangeSearchValue(event) {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      fetchMovies();
    }
  }

  function onClickSearch() {
    fetchMovies();
  }

  function fetchMovies() {
    fetch(`http://localhost:5000/${searchValue}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .then((error) => console.log("error: ", error));
  }


  return (
    <Container style={{ marginTop: "60px" }}>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data && data.length > 0 &&
            data.map((movie) => {
              return (
                <Col md={4} key={movie.imdbID}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={movie.poster}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{movie.title}</CardTitle>
                      <CardText>
                        {movie.year}
                      </CardText>

                      <Link
                        to={`/movieInfo/${movie.imdbID}`}
                        className="btn-text"
                        variant="secondary"
                      >
                        <Button>Show More</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
    </Container>
  );
}
