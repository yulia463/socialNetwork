import React, {useState} from "react";
import s from "./../Dialogs.module.css"
import {NavLink, useNavigate} from "react-router-dom";

type DialogItemPropsType = {
    name: string;
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    const navigate = useNavigate();
    return <div
        onClick={() => {
            navigate(props.name)
        }}
        className={s.dialog + " " + s.active}
    >
        {props.name}
    </div>
}
export default DialogItem;