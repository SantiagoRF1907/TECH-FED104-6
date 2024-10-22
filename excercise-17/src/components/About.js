import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <button type="button" onClick={() => navigate("/")}>
        Go to Home Page
      </button>
    </>
  );
}

export default About;
