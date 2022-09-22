import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../index";

type MyPostsProps = {
    posts:Array <PostType>
    id:number
    message:string
    likesCount:number
}

const MyPosts = (props: MyPostsProps) => {



let postsElements =
    props.posts.map((p) => <Post likesCount={p.likesCount} title={p.message}/>)

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;