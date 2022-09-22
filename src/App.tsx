import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {DialogType, MessageType, PostType} from "./index";
import {StateType} from "./components/redux/State";


type AppProps = {
    state:StateType
}


function App(props: AppProps) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs messagesData={props.state.messagesPage.messagesData} dialogsData={props.state.messagesPage.dialogsData}/>}/>
                    <Route path={'/profile'}   element={<Profile posts={props.state.profilePage.posts}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
