import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { get } from "lodash";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default function MovieDetailSection() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, {});

  function getMovieDetail() {
    setLoading(true);
    fetch(`http://localhost:5000/getMovieById/${movieId}`)
      .then((response) => response.json())
      .then((result) => {
        const [movieDetail] = result;
        setLoading(false);
        setData(movieDetail);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert("Ticket Booked");
  }
  console.log(JSON.stringify(data));
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
                  src={data.poster}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    <h3>{data.title}</h3>
                  </CardTitle>
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
