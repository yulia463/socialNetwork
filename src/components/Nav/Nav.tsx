import React, {useState} from "react";
import classes from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('profile')
    return <nav className={classes.nav}>
        <div onClick={() => {
            setActiveNav('profile')
            navigate('/profile')
        }} className={activeNav === 'profile' ? `${classes.item}${classes.activ}` : classes.item}>
            Profile
        </div>
        <div
            onClick={() => {
                setActiveNav('dialogs')
                navigate('/dialogs')
            }}
            className={activeNav === 'dialogs' ? `${classes.item}${classes.activ}` : classes.item}
        >
            Messenger
        </div>
        <div
            onClick={() => {
                setActiveNav('new')
                navigate('/new')
            }}
            className={activeNav === 'new' ? `${classes.item}${classes.activ}` : classes.item}
        >
            <a>New</a>

        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
};

export default Nav;