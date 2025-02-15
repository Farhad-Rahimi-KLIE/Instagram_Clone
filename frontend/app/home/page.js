"use client"
import '../home/home.css'
import user from '../../public/assets/default-user.png';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, likePost, commentPost, savePost, unsavePost } from '../../lib/features/MainData/maindata.Slice'
function HomePage() {
  const dispatch = useDispatch();
  const postsss = useSelector((state) => state.posts.posts);
  const [comment, setComment] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])
  const handleLike = (postId) => {
    dispatch(likePost(postId));
  };

  const handleInputChange = (postId, value) => {
    setComment(prev => ({
        ...prev,
        [postId]: value
    }));
};

  const handleComment = (postId, comment) => {
    if (comment.trim()) {
      dispatch(commentPost({ postId, text: comment }));
      setComment('');
    }
  };

  const handleSaveUnsave = (postId) => {
    console.log(postId)
      dispatch(savePost(postId));
  };

  return (
    <main className="main-container">
      <section className="content-container">
        <div className="content">
          <div className="stories">
            <button className="stories__left-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
                ></path>
              </svg>
            </button>
            <div className="stories__content">
              <button className="story story--has-story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                      <defs>
                        <linearGradient
                          y2="0"
                          x2="1"
                          y1="1"
                          x1="0"
                          id="--story-gradient"
                        >
                          <stop offset="0" stopColor="#f09433" />
                          <stop offset="0.25" stopColor="#e6683c" />
                          <stop offset="0.5" stopColor="#dc2743" />
                          <stop offset="0.75" stopColor="#cc2366" />
                          <stop offset="1" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick1</span>
              </button>
              <button className="story story--has-story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick2</span>
              </button>
              <button className="story story--has-story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick3</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>

                  </div>
                </div>
                <span className="story__user">usernick4</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick5</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick6</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick7</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick8</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick9</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick10</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick11</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick12</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick13</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick14</span>
              </button>
              <button className="story">
                <div className="story__avatar">
                  <div className="story__border">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="31" cy="32" cx="32" />
                    </svg>
                  </div>
                  <div className="story__picture">
                    {/* <img src={user} alt="User Picture" /> */}
                    <Image src={user} alt="User Picture"></Image>
                  </div>
                </div>
                <span className="story__user">usernick15</span>
              </button>
            </div>
            <button className="stories__right-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="posts">
            {postsss && postsss.map((post) => (
              <article className="post" key={post._id}>
                <div className="post__header">
                  <div className="post__profile">
                    <a
                      href="https://github.com/leocosta1"
                      target="_blank"
                      className="post__avatar"
                    >
                      {/* <img src={user} alt="User Picture" /> */}
                      <Image src={user} alt="User Picture"></Image>
                    </a>
                    <a
                      href="https://github.com/leocosta1"
                      target="_blank"
                      className="post__user"
                    >{post.title}</a
                    >
                  </div>

                  <button className="post__more-options">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.5"
                        cy="11.5"
                        r="1.5"
                        fill="var(--text-dark)"
                      />
                      <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                      <circle
                        cx="17.5"
                        cy="11.5"
                        r="1.5"
                        fill="var(--text-dark)"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__content">
                  <div className="post__medias">
                    {/* <img
                    className="post__media"
                    src={insta}
                    alt="Post Content"
                  /> */}
                    <Image className="post_media" src={`http://localhost:8000/${post.image}`} width={600} height={600} alt="Post Content"></Image>
                  </div>
                </div>

                <div className="post__footer">
                  <div className="post__buttons">
                    <button className="post__button" onClick={() => handleLike(post._id)}>
                      Like ({post.likes.length})
                    </button>

                    <button className="post__button post__button--align-right" onClick={() => handleSaveUnsave(post._id)}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          strokeWidth="0.7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="post__infos">
                    <div className="post__likes">
                <input type="text" className='inpt' value={comment[post._id] || ""}
    onChange={(e) => handleInputChange(post._id, e.target.value)} /><button className='ml-[2rem] w-[8rem] h-[2rem] bg-green-700 mt-4 font-bold text-white' onClick={()=> handleComment(post._id, comment[post._id] || "")}>Add Comment</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="side-menu">
          <div className="side-menu__user-profile">
            <a
              href="https://github.com/leocosta1"
              target="_blank"
              className="side-menu__user-avatar"
            >
              {/* <img src={user} alt="User Picture" /> */}
              <Image src={user} alt="User Picture"></Image>
            </a>
            <div className="side-menu__user-info">
              <a href="https://github.com/leocosta1" target="_blank"
              >leocosta1</a
              >
              <span>Leonardo Costa</span>
            </div>
            <button className="side-menu__user-button">Switch</button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default HomePage;
