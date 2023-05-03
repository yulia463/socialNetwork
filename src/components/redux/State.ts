import React from "react";
import {DialogType, MessageType, PostType} from "../../index";
import {rerenderEntireTree} from "../../render";

export type StateType = {
    profilePage: {
        posts: Array<PostType>,
        // newPostText:'it-kamasutra.com'
    }
    messagesPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "my first post", likesCount: 12},
            {id: 2, message: "how are you ?", likesCount: 11},
            {id: 3, message: "put likes", likesCount: 17}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Yulia"},
            {id: 2, name: "semen"},
            {id: 3, name: "Tereza"},
            {id: 4, name: "Lola"},
            {id: 5, name: "Evgenia"},
            {id: 6, name: "Sonja"}
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-Kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ]
    }
}

export let addPost=(postMessage:any)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}


export default state;