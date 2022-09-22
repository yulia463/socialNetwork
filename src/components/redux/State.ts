import React from "react";
import {DialogType, MessageType, PostType} from "../../index";

export type StateType = {
    profilePage: {
        posts: Array<PostType>
    }
    messagesPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "post1", likesCount: 12},
            {id: 2, message: "How is your it-Kamasutra?", likesCount: 11},
            {id: 3, message: "How is lfejrhf?", likesCount: 11},
            {id: 4, message: "jgjdrj?", likesCount: 11},
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

export default state;