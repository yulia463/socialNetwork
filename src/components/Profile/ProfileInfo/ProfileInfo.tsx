import MyPosts from "../MyPosts/MyPosts";
import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
        <div >
            <img style={{width: '100%'}}
                 src="https://www.etoretro.ru/data/media/1185/143780636038c.jpg"
            />
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>

};

export default ProfileInfo;