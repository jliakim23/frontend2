
import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const Show = () => {
  const journalEntry = useLoaderData();

  const div = {
    textAlign: "center",
    border: "1px solid #d4d4d4",
    borderRadius: "8px",
    width: "80%",
    margin: "30px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    background: "#fff",
  };

  return (
    <div style={div}>
      <h2>Mood: {journalEntry.mood}</h2>
      <h2>Activities: {journalEntry.activities}</h2>
      <h2>Date: {journalEntry.date}</h2>
      <h2>photo: {journalEntry.photo}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;