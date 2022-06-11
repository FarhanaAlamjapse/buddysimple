import React, { useEffect, useState } from 'react';
import  {useParams} from 'react-router-dom';


const PostDetail = () => {
    const {id}=useParams();
    const [postDetail,setPostDetail]=useState({})
    const [photos,setPhotos]=useState([])  
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPostDetail(data))

    },[id])

   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[id])

    return (
        <div>     
        <h1>This is Post detail of {id}</h1> 
        <p>post detail:{postDetail.id}</p>
        <p>Title:{postDetail.title}</p>
        <p>Body:{postDetail.body}</p>
         <p>{photos.url}</p>
        
         {/* {
         photos.map(p=><Photos p={p}></Photos>) 
         }  */}
        
        </div>
        
    );
};

export default PostDetail;