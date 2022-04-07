import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Cookies from 'js-cookie';

function CommentItem(props) {
  const [author, setauthor]=useState(Cookies.get('userID'));
  const [isAuthor, setisAuthor]=useState(false);
  const handeDeletCommet=()=>{
    console.log('Cookies uid=', author);
    console.log('props uid=', props.userID._id);
    
  }
  return (
    <div>
      <div className="commentsDone">
        <Avatar alt="Mike" src={props.userID.userImg} />
        <div id="comment-box" className="postComment">
          <div className="comment-name">
            <span>{props.userID.userName}</span> 
            {Cookies.get('userID') === props.userID._id ? <button onClick={handeDeletCommet} >DELETE </button> :""}
            
          </div>
          {/* <div className="comment-time">AUG 25 2022 @ 14:33</div> */}
          <div className="comment-time">{props.createTime}</div>
          <div className="comment-context">
          {props.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
