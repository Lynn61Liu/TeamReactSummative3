import React from 'react';
import '../css/postPage.css';
// import Backbtn from '../components/Backbtn.jsx'
// import Infobtn from '../components/Infobtn.jsx'
//import Commentbtn from '../components/Commentbtn.jsx'

function Detail(props) {
  console.log(props);
  return (
    <>
      <div className="postPage">
            <div className="title">
              <a href="">
             
              </a>
              <h3>Animal Title</h3>
            </div>

            <div className="postDetail">
              <div className="detailImg"> </div>
              <div className="postMenu">
                <>
                  <p>
                    <span>username</span>
                  </p>
                  <p>post date</p>
                </>
              </div>

              <div className="btnDetail">
               
                {/* <a href=""> <Commentbtn /> </a> */}
              </div>

            </div>

      


      </div>

      {/* <h3> This is post  page</h3>
     <h3> Task </h3>
     <ol>
       <li>get this post infor from DB and display </li>
       <li>get all comments about this post from DB</li>
       <li>add comment to DB</li>
       <li>can edit the comment if written by login user </li>    
     </ol>

     <h3>The following parameters come to props: </h3>
    <div>userID:props.uID={props.uID}</div>
    <div>postID:props.pID ={props.pID}</div> */}
    </>
  );
}

export default Detail;
