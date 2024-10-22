import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={() => navigate("/about")}>
        Go to About Page
      </button>
    </>
  );
}

export default Home;
