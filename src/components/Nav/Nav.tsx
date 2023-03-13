import React, {useState} from "react";
import classes from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();




    const navigateHandler = (linkName:string) =>{
        navigate(linkName)
    }

    return <nav className={classes.nav}>

        <div  onClick={()=>{navigateHandler("profile")}}
            className={classes.item}>
            Profile
        </div>

        <div
            onClick={()=>{navigateHandler("dialogs")}}
            className={classes.item}>
           Messenger
        </div>

        <div
            onClick={()=>{navigateHandler("new")}}
            className={classes.item}>New</div>

        <div
            onClick={()=>{navigateHandler("music")}}
            className={classes.item}>Music</div>

        <div
            onClick={()=>{navigateHandler("setting")}}
            className={classes.item}>Settings</div>
    </nav>
};


export default Nav;