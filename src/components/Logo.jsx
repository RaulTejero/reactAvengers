import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/logo.css";

export const Logo = () => {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
            alt=""
          />
        </Link>
      </BrowserRouter>
    </>
  );
};
