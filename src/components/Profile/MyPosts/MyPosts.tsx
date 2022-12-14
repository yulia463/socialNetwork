import React, {useState} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../index";

type MyPostsProps = {
    posts: Array<PostType>
    id: number
    message: string
    likesCount: number
    addPost:(postMessage:any)=>void
}

const MyPosts = (props: MyPostsProps) => {
let [text,setText]=useState('')

    let postsElements =
        props.posts.map((p) => <Post likesCount={p.likesCount} title={p.message}/>)




    const addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost(text);
        setText('');
        // newPostElement.current.value = '';

    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={text} onChange={(e)=>{setText(e.currentTarget.value)}} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;