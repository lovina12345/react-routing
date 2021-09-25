import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/details/17/john">Go to contact page</Link>
    </div>
  );
}