import React, {useState} from "react";
import s from "./Dialogs.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType, PostType} from "../../index";


type DialogsPropsType={
    dialogsData:Array<DialogType>
    messagesData:Array<MessageType>

}

export const Dialogs = (props:DialogsPropsType) => {


    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.dialogsData.map((dialog) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }



            </div>

            <div className={s.messages}>
                {
                    props.messagesData.map((message) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Dialogs;