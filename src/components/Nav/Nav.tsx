import React, {useState} from "react";
import classes from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();
// объявляем функцию навигейст с помощью хука useNavigate

    const navigateHandler = (linkName:string) =>{
        navigate(linkName)
    }

    return <nav className={classes.nav}>

        <div onClick={()=>{navigateHandler("profile")}} className={classes.item}>Profile</div>

        <div onClick={()=>{navigateHandler("dialogs")}} className={classes.item}>Messenger</div>

        <div onClick={()=>{navigateHandler("new")}} className={classes.item}>New</div>

        <div onClick={()=>{navigateHandler("music")}} className={classes.item}>Music</div>

        <div onClick={()=>{navigateHandler("setting")}} className={classes.item}>Settings</div>
    </nav>
};
/*
 1 мы выбираем компоненту к которой хотим достучаться . Например мессадж
  и вместо тега <a> удаляем за ненадобъесть и используем оnClick
 2 cоздаем функцию navigateHandler и описываем внутриностти
   const navigateHandler = (linkName:string) =>{
        setLink(linkName)
    }
    onClick={()=>{navigateHandler("dialogs")}}

     в функцию вызываемую в  онклике прокидываем аргумент из фунцкции -это имя роута
   3 прокидываем он клик на все прокидываем все дивки по аналогии
     4 теперь переходим в файл арр
 */

export default Nav;