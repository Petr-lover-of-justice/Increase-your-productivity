import React from 'react';
import s from "./messageItem.module.css"

const MessageItem = (props) => {

    return (
        <div className={s.dialoguetext1}>{props.word}</div>
    )
}
export default MessageItem;