import React from 'react';
import message from "./message.module.css"
import MessageItem from './messageItem/messageItem';
import User from './user/user';




const Message = (props) => {


    let userElements = props.state.userData.map(d => <User name={d.name} id={d.id} />);
    let messageElementsWord = props.state.messageDataWord.map(m => <MessageItem word={m.word} id={m.id} />)

    
    return (
        <div className={message.dialogue}>
            <div> <input type="text" /></div>
            <div className={message.dialogueMessage}>
                <div className={message.dialogueCaller}>
                    {userElements}

                </div>
                <div className={message.dialoguetext}>
                    {messageElementsWord}
                </div>
            </div>

        </div>
    )
};
export default Message;