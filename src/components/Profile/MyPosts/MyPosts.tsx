import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
        My Posts
        <div>
            <textarea></textarea>
            <button>Add post</button>

        </div>
        <div className={s.posts}>
            <Post likeCaunt={15} title={"post 1"}/>
            <Post likeCaunt={20} title={"post 2"}/>
            <Post likeCaunt={33} title={"post 3"}/>
            <Post likeCaunt={19} title={"post 4"}/>
            <Post likeCaunt={78} title={"post 5"}/>
            <Post likeCaunt={89} title={"post 6"}/>

        </div>
    </div>

};

export default MyPosts;