import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const[posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
    return (
        <div>
     <h1>This is home</h1>
     
    <h4> I have got {posts.length} posts</h4>
    <ul>
    {
        posts.map(post=><Post post={post}></Post>)
        
    }
    </ul>
     </div>
    );
};

export default Home;