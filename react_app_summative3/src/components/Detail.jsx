import React from 'react';
import '../css/postPage.css';
import Backbtn from '../components/Backbtn.jsx'
import Infobtn from '../components/Infobtn.jsx'
import Commentbtn from '../components/Commentbtn.jsx'

function Detail(props) {
  console.log(props);
  return (
    <>
      <div className="postPage">
            <div className="title">
              <a href="">
                < Backbtn />
              </a>
              <h2>Animal Title</h2>
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
              
                <a href=""> <Infobtn  /> </a>
                <a href=""> <Commentbtn /> </a>
              </div>

              <div className='postDescription'>
                <h3>Description</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero unde hic nesciunt quis asperiores voluptate officia vitae corrupti rem. Perferendis iure voluptas quod omnis magnam libero dolorum dolores aliquam, accusamus provident ipsum odit alias veniam recusandae expedita possimus dicta. Ad in numquam alias, aliquam veritatis ducimus rem deserunt corporis exercitationem.</p>
              </div>

              <div className='comments'>
                
                <div className="profileImg profileImgS"></div>
                <input type="text" placeholder='Write a comment...' className='postComment' />
                <a href="">Post</a>
              </div>

              <div className='commentsDone'>
                
                <div className="profileImg profileImgS"></div>
                <div id="comment-box" className='postComment'><p>
                Where did you spot that bird? <br />beautiful creature
                </p>
                </div>

                
              </div>

              <div className='commentsDone'>
                
                <div className="profileImg profileImgS"></div>
                <div id="comment-box" className='postComment'><p>
                Where did you spot that bird? <br />beautiful creature
                </p>
                </div>

                
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
