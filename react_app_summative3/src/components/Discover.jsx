import React from 'react';
import { Link } from 'react-router-dom';
import '../css/discover.css';
import Editbtn from '../components/Editbtn.jsx';
function Discover(props) {
  return (
    <>
      <div className="discoverDisplay">
        <div className="discoverDetails">
          <h3>Discover NZ Wildlife</h3>
        </div>
        <div className="searchButtons" >
          <button>
            ALL
          </button>
          <button>
            MARINE MAMMALS
          </button>
          <button >
            REPTILES AND FROGS
          </button>
          <button>
            RODENTS
          </button>
          <button >
            BIRDS
          </button>
          <button >
            INSECTS
          </button>
        </div>
        <div className="pastPosts">
          <div className="discoveryGallery container">
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost filterDiv all bird"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Username, Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Username, Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/home/detail">
                <div
                  className="discoverPost"
                  onClick={() => {
                    props.getPostID(
                      'onclick post from profile page & postid42394283',
                    );
                  }}
                >
                  <div className="discoverImg"></div>
                  <div className="postText">
                    <div>
                      <p>
                        <span>Animal</span>
                      </p>
                      <p>Post date</p>
                    </div>
                    <div>
                      <a href="">
                        {' '}
                        <Editbtn />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;

{
  /* <h3>The following parameters come to props: </h3>
      <div>userID:props.uID={props.uID}</div>
      <nav>
        <Link to="/home/detail">
          <button
            onClick={() => {
              props.getPostID(
                "onclick post from profile page & postid42394283"
              );
            }}
          >
            i'm a post
          </button>
        </Link>
      </nav> */
}
