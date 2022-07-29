import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
