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
                {/*вместо этого =>*/}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*пишем это =>*/}
                {/*{*/}
                {/*    dialogsData.map((dialog) =>{*/}
                {/*        return(*/}
                {/*            <DialogItem name={dialog.name} id={dialog.id}/>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}


            </div>

            <div className={s.messages}>
                {
                    props.messagesData.map((message) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }
            {/*    <Message message={messagesData[0].message}/>*/}
            {/*    <Message message={messagesData[1].message}/>*/}

            </div>
        </div>
    )
}

export default Dialogs;