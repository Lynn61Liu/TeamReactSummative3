import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";
import axios from "axios";
import moment from 'moment';
import 'moment/locale/en-nz';


function CommentItem(props) { 
  moment.locale('en-nz')
  const newCreateTime = moment(props.createTime).format('LLL');
  const newUpdateTime =moment(props.updateTime).format('LLL');
  // useEffect(() => {
  //   console.log('item did mount');
  // }, [])
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
          {
            props.createTime === props.updateTime ? 
            <div className="comment-time">{newCreateTime}</div>
            :  <div className="comment-time"> edit@ {newUpdateTime}</div>
          }
          {/* <div className="comment-time">{props.createTime}</div> */}
          <div className="comment-context" dangerouslySetInnerHTML={{__html: props.comment}}/>
          {/* <div className="comment-context" >{props.comment} </div> */}
        
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
