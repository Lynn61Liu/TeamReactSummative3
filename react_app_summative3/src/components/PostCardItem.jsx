import React from "react";
// import Editbtn from "./Editbtn";
import moment from "moment";
import "moment/locale/en-nz";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import Cookies from "js-cookie";



function PostCardItem(props) {
  moment.locale("en-nz");
  const handlonclick = () => {
    console.log("handlonclick pid ", props._id);
    props.getPostID(props._id);
  };
  const handeDelet = (e) => {
    axios
      .delete(`http://localhost:4000/api/delete-comment-by-postID/${props._id}`)
      .then((response) => {
         console.log(response.data);
      });
      axios
      .delete(`http://localhost:4000/api/delete-animals/${props._id}`)
      .then((response) => {
         console.log(response.data);
      });
    //   console.log('get delFlag:',props.delFlag);
      props.profileHandleDel(!props.delFlag);

  };

  return (
    <div className="discoverPost">
      <Link to="/home/detail">
        <div className="discoverImg">
          <img onClick={handlonclick} src={props.images} alt="" />
        </div>
      </Link>
      <div className="postText">
        <div>
          <p>{props.titleName} </p>
          <p> {props.userID.userName}, {moment(props.postTime).format("LL")} </p>
        </div>
        <div>
        {Cookies.get("userID") === props.userID._id ? (
              <DeleteForeverIcon onClick={handeDelet} sx={{ fontSize: 19 }}/>
            ) : (
              ""
            )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default PostCardItem;
