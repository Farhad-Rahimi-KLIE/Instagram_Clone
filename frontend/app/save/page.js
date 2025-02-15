"use client"
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedPosts } from "../../lib/features/MainData/maindata.Slice";
import React, { useEffect } from 'react'
import Image from "next/image";
const page = () => {

  const dispatch = useDispatch();
const savedPosts = useSelector((state) => state.posts.savedPosts);
console.log(savedPosts);

useEffect(()=>{
  dispatch(fetchSavedPosts());
},[])

  return (
     <div>
      <h2>Saved Posts</h2>
      {savedPosts.length > 0 ? (
        savedPosts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
          <Image className="post_media" src={`http://localhost:8000/${post.image}`} width={600} height={600} alt="Post Content"></Image>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No saved posts</p>
      )}
    </div>
  )
}

export default page
