import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Website</h1>
      <Link to="/html-css">AssignmentHTML-CSS</Link>
      <br></br>
      <Link to="/js-api">MovieDB</Link>
    </div>
  );
};

export default Home;
