import React, {useState} from "react";
import classes from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

const Nav = () => {


    return <nav className={classes.nav}>

        <div className={classes.item}><a>Profile</a></div>

        <div className={classes.item}><a>Messenger</a></div>

        <div className={classes.item}><a>New</a></div>

        <div className={classes.item}><a>Music</a></div>

        <div className={classes.item}><a>Settings</a></div>
    </nav>
};

export default Nav;