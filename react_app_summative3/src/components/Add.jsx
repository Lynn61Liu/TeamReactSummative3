import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import useFormControls from "./useFormControls";
import "../css/Add.css";
import { InputLabel } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// import src from "../img/**.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-multiline": {
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgb(97, 96, 96);",
      },
    },
  },
}));
export const Add = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  const [selectedFile, setSelectedFile] = useState([]);
  const [preview, setPreview] = useState(false);
  const [imgCollection, setimgCollection] = useState({});
  const searchInput = useRef();
  const classes = useStyles();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      // console.log("selectedFile is null");
      return;
    }
    for (let i = 0; i < selectedFile.length; i++) {
      let objectUrl = URL.createObjectURL(selectedFile[i]);
      setPreview((preview) => [...preview, objectUrl]);
    }
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setPreview([]);
    setSelectedFile(e.target.files);
    setimgCollection(e.target.files);
  };
  return (
    <div className="page-app">
      <h3 className="page-title">Add New Listing</h3>
      <form onSubmit={handleFormSubmit} className="add-form">
        {/*==================== photo section==================*/}
        <div className="section-wrap">
          <div className="add-img-icon">
            <InputLabel
              className="add-file-upload"
              // {...(errors.photo && { error: true})}
            >
              <InsertPhotoOutlinedIcon
                sx={{
                  fontSize: "30px",
                }}
              />

              <input
                type="file"
                name="photo"
                onChange={(e) => {
                  onSelectFile(e);
                  handleInputValue(e);
                }}
                ref={searchInput}
                // {...(errors.photo && { error: true, helperText: errors.photo })}
              />
            </InputLabel>
            <span className="chose-img">Choose Image</span>
          </div>

          <div className="add-preview">
            {preview ? (
              preview.map((src, id) => (
                <img key={id} src={src} alt="" />
                // </div>
              ))
            ) : (
              // :<img style={{width:'80%'}} src={defaultImg} alt=" " />
              <PanoramaOutlinedIcon
                sx={{ fontSize: "70px", color: "#E3E3E3" }}
              />
            )}
          </div>
        </div>
        {/*==================== name section==================*/}
        <div className="section-wrap">
          <div className="add-lable">Animal Name </div>
          <TextField
            aria-label="search"
            className={classes.root}
            variant="outlined"
            // color="rgb(97, 96, 96)"
            size="small"
            type="text"
            fullWidth
            onBlur={handleInputValue}
            name="AnimalName"
            autoComplete="none"
            {...(errors.AnimalName && {
              error: true,
              helperText: errors.AnimalName,
            })}
          />
        </div>
        {/*==================== Category section==================*/}
        <label className="add-lable">Category:</label>
        <div className="categoryWrap" >
          <select className="Category" name="category" onChange={handleInputValue}>
          <option value=""></option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>

        {/*==================== description section==================*/}
        <div className="section-wrap">
          <div className="add-lable">Listing description </div>
          <TextField
            aria-label="search"
            size="small"
            className={classes.root}
            variant="outlined"
            type="text"
            fullWidth
            onBlur={handleInputValue}
            name="description"
            multiline
            minRows="10"
            autoComplete="none"
            {...(errors.description && {
              error: true,
              helperText: errors.description,
            })}
          />
        </div>

        <Button type="submit" disabled={!formIsValid()}>
          posting
        </Button>
      </form>
    </div>
  );
};

export default Add;
