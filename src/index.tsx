import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import state from "./components/redux/State";
export type PostType={
    id:number
    message:string
    likesCount:number
}
export type DialogType={
    id:number
    name:string
}
export type MessageType={
    id:number
    message:string
}


rerenderEntireTree(state);

reportWebVitals();
