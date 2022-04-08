import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";
import axios from "axios";

function CommentItem(props) { 
  const handeDeletCommet = (e) => {
    
    axios
      .delete(`http://localhost:4000/api/delete-comment-by-id/${props._id}`)
      .then((response) => {
         console.log(response.data);
      });
      props.shortcomment(!props.flagDele);

  };

  const handeUpdataCommet = ()=>{
  console.log('form item cid=',props._id);
    props.updatecomment(props._id);
  }
  return (
    <div>
      <div className="commentsDone">
        <Avatar alt="Mike" src={props.userID.userImg} />
        <div id="comment-box" className="postComment">
          <div className="comment-name">
            <span>{props.userID.userName}</span>
            {Cookies.get("userID") === props.userID._id ? (
              <div>
              <button onClick={handeDeletCommet}>DELETE </button>
               <button onClick={handeUpdataCommet}>UPATE </button>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* <div className="comment-time">AUG 25 2022 @ 14:33</div> */}
          <div className="comment-time">{props.createTime}</div>
          <div className="comment-context">{props.comment}</div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
