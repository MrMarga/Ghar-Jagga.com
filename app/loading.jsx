"use client";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const loading = ({ loading }) => {
  return (
    <center>
      <HashLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="loading Spinner"
      />
    </center>
  );
};

export default loading;
