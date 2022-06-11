import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {userId,id,title,body}=props.post;
    const history=useNavigate();
    const showComments=(id)=>{
        const url=`post/${id}`;
        history(url)
    }

    return (
        <div>
            <h1><strong>id:{id} <br /></strong>{title}</h1><br />
            <h4>{body}</h4>
            <button onClick={()=>showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;