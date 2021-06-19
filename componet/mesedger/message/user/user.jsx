import React from 'react';
import s from "./user.module.css";
import { NavLink } from 'react-router-dom'


const User=(props)=>{
    
    return(<div className={s.dialogueCaller1}>
        <NavLink to={"/message/" + props.id}>{props.name} </NavLink>
        </div>
    )
}
export default User;