import React from "react";
import Avatar from "@mui/material/Avatar";
import mike from "../img/mike.jpg";

function CommentItem() {
  return (
    <div>
      <div className="commentsDone">
        <Avatar alt="Mike" src={mike} />
        <div id="comment-box" className="postComment">
          <div className="comment-name">
            <span>Samen</span> <button>DELETE</button>{" "}
          </div>
          <div className="comment-time">AUG 25 2022 @ 14:33</div>
          <div className="comment-context">
            no changes added to commit (use "git add" and/or "git commit -a")
            mac@MacdeMBP react_app_summative3 % git add . mac@MacdeMBP
            react_app_summative3 % git commit -m " change detail page commit
            style" [detail 77a4c52]{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
