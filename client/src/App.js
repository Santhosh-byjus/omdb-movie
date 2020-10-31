import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import SearchSection from "./components/SearchSection";

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    onClickSearch()
  },[])


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
    fetch(`http://localhost:5000/getMovies?searchValue=${searchValue}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <Container style={{ marginTop: "60px" }}>
      <Link
        to={`/add-movie/`}
        className="btn btn-primary"
      >Add a movie</Link>
      <br></br>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data && data.length &&
            data.map((movie) => {
              return (
                <Col md={3} key={movie.imdbID}>
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
                        to={`/booking-page/${movie.imdbId}`}
                        className="btn btn-primary"
                      >
                        Show more
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
