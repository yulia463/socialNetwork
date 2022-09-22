import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfileProps = {
    posts: Array <PostType>
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} id={5} message={'ksks'} likesCount={84}/>
    </div>

};

export default Profile;