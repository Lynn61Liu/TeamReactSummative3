import React from "react";
import "../css/addPost.css";
import { AiOutlineFileImage } from "react-icons/ai";

function Add() {
  return (
    <>
      <h3>Add New Listing</h3>
      <form action="/">
        <label for="description">Listing description:</label>
        <input type="text" id="description" name="description"></input>
        <label for="img">Select image:</label>
        <h1>
          <AiOutlineFileImage />
        </h1>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <button type="cancel">Cancel</button>
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default Add;
