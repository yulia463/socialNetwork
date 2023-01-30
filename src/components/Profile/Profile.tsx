import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfileProps = {
    posts: Array<PostType>
    addPost: (postMessage: any) => void
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            addPost={props.addPost}
            posts={props.posts}
        />
    </div>

};

export default Profile;