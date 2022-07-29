import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>

            <img style={{width: '100%'}}
                 src="https://www.etoretro.ru/data/media/1185/143780636038c.jpg"
            />
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>

};

export default Profile;