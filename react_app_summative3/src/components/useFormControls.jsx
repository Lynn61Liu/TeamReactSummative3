import { useState ,useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const initialFormValues = {
  category: "",
  AnimalName: "",
  photo: "",
  description: "",
  formSubmitted: false,
  success: false,
};

const useFormControls = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState([]);
  const [imgCollection, setimgCollection] = useState({});
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [imgURL, setimgURL] = useState('');
  useEffect(() => { 

  }, [selectedFile]);

  useEffect(() => { 
    if(imgURL !== ''){
     
      // console.log('imgURL',imgURL);
      //save post
      let formdata = {
        images: imgURL,
        category: values.category,
        description: values.description,
        postTime: new Date(),
        userID:Cookies.get("userID"),
        titleName:values.AnimalName,

      };

      // console.log(formdata);
      axios
        .post("//localhost:4000/api/add-animals", formdata)
        .then((response) => {
          // console.log(response.data);
          navigate("/home/profile");
          //  console.log('yes save post ');
          // Navigate(/home/profile)
        });

     
    }
  
  }, [imgURL]);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      setSelectedFile(e.target.files);
      setimgCollection(e.target.files);
    }

    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const validate = (fieldValues = values) => {
    // this function will check if the form values are valid
    let temp = { ...errors };
    if ("AnimalName" in fieldValues)
      temp.AnimalName = fieldValues.AnimalName
        ? ""
        : "title name is  required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "email is not valid.";
      if (fieldValues.email)
        temp.photo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "email is not valid.";
    }

    if ("photo" in fieldValues) {
      temp.photo = fieldValues.photo ? "" : "need one img.";
    }
    if ("category" in fieldValues) {
      temp.category = fieldValues.category ? "" : "category is required ";
    }

    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";

    setErrors({
      ...temp,
    });
  };

  const handleFormSubmit = async (e, obj) => {
    e.preventDefault();
    if (formIsValid()) {
      //   1. upload imga
      upLoadImg();
      //2 save db
     
    }
  };
  const upLoadImg = () => {
    // console.log("upLoadImg start",imgCollection);
    var formData = new FormData();
    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
    }
    axios
      .post("http://localhost:4000/api/upload-images", formData, {})
      .then((res) => {
        setimgURL(res.data.imgCreated.imgCollection[0])
      })
      .catch(function (error) {
        if (error.response) {
          
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
    
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
     
  };

  const formIsValid = (fieldValues = values) => {
    // console.log('errors',errors);
    const isValid =
      fieldValues.AnimalName &&
      fieldValues.photo &&
      fieldValues.description &&
      fieldValues.category;
    Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};

export default useFormControls;
