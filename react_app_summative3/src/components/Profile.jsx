import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css';
import imgMike from '../img/mike.jpg';
import imgBird from '../img/bird.jpg';

function Profile(props) {
  return (
    <>
      <div className="profileDisplay">
        <div className="profileDetails">
          <div className="profileImg"></div>
          <div>
            <h3>username</h3>
            <p>User number:</p>
          </div>
        </div>

        <hr />

        <div className="profileDescription">
          <h3>Description</h3>
          <p>
            I like to document bugs and wildlife in New Zealand ZIP is helping
            to protect native species by developing new tools and techniques to
            completely remove possums, rats, and stoats from large mainland
            areas.
          </p>
        </div>

        <hr />

        <div className="pastPosts">
          <h3>Past Posts</h3>
          <div className="profileGallery">
            <div className="profilePost">
              <div className="postImg"></div>
              <div className="postMenu">
                <div>
                  <p>username</p>
                  <p>post date</p>
                </div>
                <div>
                  <a href="">edit</a>
                </div>
              </div>
            </div>

            <div className="profilePost">
              <div className="postImg"></div>
              <div className="postMenu">
                <div>
                  <p>username</p>
                  <p>post date</p>
                </div>
                <div>
                  <a href="">edit</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ol>
          <li>get login user infor from DB </li>
          <li>Listing all own posts </li>
          <li>view the post detail</li>
          <li>can delete posts </li>
          <li>can edit posts </li>
        </ol>

        <h3>The following parameters come to props: </h3>
        <div>userID:props.uID={props.uID}</div>
      </div>

      <nav>
        <Link to="/home/detail">
          <button
            onClick={() => {
              props.getPostID(
                'onclick post from profile page & postid42394283',
              );
            }}
          >
            i'm a post
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Profile;
