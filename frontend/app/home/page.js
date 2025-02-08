"use client"
import '../home/home.css'
import user from '../../public/assets/default-user.png';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, likePost, commentPost } from '../../lib/features/MainData/maindata.Slice'
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
                    <button className="post__button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          strokeWidth="0.7"
                        />
                      </svg>
                    </button>
                    <button className="post__button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          strokeWidth="0.3"
                        />
                      </svg>
                    </button>

                    <div className="post__indicators"></div>

                    <button className="post__button post__button--align-right">
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
