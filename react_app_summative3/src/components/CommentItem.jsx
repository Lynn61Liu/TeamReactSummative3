import React from "react";
import Avatar from "@mui/material/Avatar";
import mike from "../img/mike.jpg";

function CommentItem(props) {
  console.log('comment props=',props);
  return (
    <div>
      <div className="commentsDone">
        <Avatar alt="Mike" src={props.userID.userImg} />
        <div id="comment-box" className="postComment">
          <div className="comment-name">
            <span>{props.userID.userName}</span> 
            
            <button>DELETE</button>
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
