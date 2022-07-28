import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Moviedb = () => {
  const movieData = async () => {
    await axios.get(
      `${process.env.REACT_APP_BASE_URL_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
  };

  console.log(movieData);

  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <input />
      <Button>Genre</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Poster</th>
            <th>Judul Film</th>
            <th>Sinopsis</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </>
  );
};

export default Moviedb;
