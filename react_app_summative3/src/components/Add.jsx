import React from "react";
import "../css/addPost.css";
import { AiOutlineFileImage } from "react-icons/ai";

function Add() {
  return (
    <>
      <div className="addDisplay">
        <h3>Add New Listing</h3>
        <form action="/">
          <div className="imageUpload">
            <label for="img">Select Image</label>
            <br></br>
            <div className="chooseImage">
              <AiOutlineFileImage />
            </div>
            <input type="file" id="img" name="img" accept="image/*" />
            <br></br>
          </div>
          <br></br>
          <label for="description">Listing description:</label>
          <input
            className="description"
            type="text"
            id="description"
            name="description"
            placeholder="Write a listing description..."
          ></input>
          <br></br>
          <br></br>
          <button className="cancel" type="cancel">
            Cancel
          </button>
          <button className="upload" type="submit">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default Add;
