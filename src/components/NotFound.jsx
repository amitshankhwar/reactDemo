import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      NotFound
      {/* <a href="/">Go to home</a> */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
