//MulitImageUpload
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../../css/MulitImageUpload.css';
function MulitImageUpload() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [preview, setPreview] = useState([]);
  const [imgCollection, setimgCollection] = useState({});
  const searchInput = useRef();

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
    // console.log('select files===',e.target.files );
    // console.log('select lenght===',e.target.files.length );
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setPreview([]);
    setSelectedFile(e.target.files);
    setimgCollection(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    for (const key of Object.keys(imgCollection)) {
      // console.log("key=", key);
      // console.log("imgCollection[key]=", imgCollection[key]);
      formData.append("imgCollection", imgCollection[key]);
    }
    axios
      .post("http://localhost:4000/api/upload-images", formData, {})
      .then((res) => {
        console.log(res.data);
        searchInput.current.value = "";
        setPreview([]);
        setimgCollection({});
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h4>max 6 images for each time</h4>
        <input
          type="file"
          name="imgCollection"
          onChange={onSelectFile}
          multiple
          ref={searchInput}
        />
     
      <div>
        {preview &&
          preview.map((src, id) => (
            <img className="resize" key={id} src={src} alt="" />
          ))}
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
        </div>
       </form>
        <a target="_blank" rel="noreferrer" href="http://localhost:4000/api">
          <button>check result</button>
        </a>
     
    </div>
  );
}

export default MulitImageUpload;
