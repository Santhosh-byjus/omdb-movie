import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

export default function MovieDetailSection() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getDetails();
  }, []);

  function getDetails() {
    setLoading(true);
    fetch(`http://localhost:5000`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  return (
    <Container>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <section className="movie-details-section">
            <Card className="align-items-center text-center">
              <CardImg
                top
                style={{ height: "480px", width: "360px" }}
                src={data.Poster}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h3>{data.Title}</h3>
                </CardTitle>
                <CardText>
                  <p>
                    <strong>Released Date: </strong>
                    {data.Released}
                  </p>
                  <p>
                    <strong>Movie RunTime: </strong>
                    {data.Runtime}
                  </p>
                  <p>
                    <strong>Genre:</strong>
                    {data.Genre}
                  </p>
                  <p>
                    <strong>Director: </strong>
                    {data.Director}
                  </p>
                  <p>
                    <strong>Actors: </strong>
                    {data.Actors}
                  </p>
                  <p>
                    <strong>Plot: </strong>
                    {data.Plot}
                  </p>
                  <p>
                    <strong>Language: </strong>
                    {data.Language}
                  </p>
                  <p>
                    <strong>Rating: </strong>
                    {data.imdbRating}
                  </p>
                  <p>
                    <strong>Votes: </strong>
                    {data.imdbVotes}
                  </p>
                  <p>
                    <strong>Box Office:</strong>
                    {data.BoxOffice}
                  </p>
                </CardText>
                <Button color="primary">Watch Movie</Button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.goBack()}
                >
                  Go Back
                </button>
              </CardBody>
            </Card>
          </section>
        </>
      )}
    </Container>
  );
}
