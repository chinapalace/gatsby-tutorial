import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <div>
      <p>Hello world from my second Gatsby page</p>
      <Link to="/">back home</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);