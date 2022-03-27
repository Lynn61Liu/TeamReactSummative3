import React from 'react'

function Detail(props) {
    console.log(props);
  return (
    <>

<h3> This is post detail page</h3>
     <h3> Task </h3>
     <ol>
       <li>get this post infor from DB and display </li>
       <li>get all comments about this post from DB</li>
       <li>add comment to DB</li>
       <li>can edit the comment if written by login user </li>    
     </ol>

     <h3>The following parameters come to props: </h3>
    <div>userID:props.uID={props.uID}</div>
    <div>postID:props.pID ={props.pID}</div>
   
    </>
  )
}

export default Detail