import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {DialogType, MessageType, PostType} from "./index";
import {addPost, StateType} from "./components/redux/State";


type AppProps = {
    state: StateType
    addPost:(postMessage:any)=>void
}


function App(props: AppProps) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                {/*<Dialogs messagesData={props.state.messagesPage.messagesData}    dialogsData={props.state.messagesPage.dialogsData}/>*/}
                {/*<Profile  posts={props.state.profilePage.posts}  addPost={props.addPost}/>*/}
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs messagesData={props.state.messagesPage.messagesData}
                                                               dialogsData={props.state.messagesPage.dialogsData}/>}/>
                    <Route path={'/profile'} element={<Profile
                        posts={props.state.profilePage.posts}
                        addPost={props.addPost}/>}/>
                </Routes>
            </div>
        </div>
    );
}
/*
в этом файле мы обозначаем какие роуты мы ловим  для отрисовки path={'/dialogs'} это путь
 element= это то что отрисовывать когда он совпадет
 хедер и нав всегда будут отрисовываться так как они стоят вне роутов но внутри арр
 а остальные компоненты будут динамически отрисовываться в зависимости от урла
 */

export default App;
