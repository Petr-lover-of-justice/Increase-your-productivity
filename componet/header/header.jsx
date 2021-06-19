import React from 'react';
import header from "./header.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {button} from "react-bootstrap"


const Header = () => {
    return (
        <div className={header.all}>
            <div className={header.title}>
                <div className={header.titleFood}><span className={header.titlefirst}> food</span><span className={header.titlehub}>hub
    </span>
                </div>
            </div>
            <div className={header.header}>
                <li className={header.menu}>
                    <ul className="menu1"><a href="#">Меню</a></ul>
                    <ul className="menu1"><a href="#"> Новинки и акции</a></ul>
                    <ul className="menu1"><a href="#"></a> Мы на карте</ul>
                    <ul className="menu1"><a href="#"></a> Родителям и детям</ul>
                    <ul className="menu1"><a href="#"></a> Качество</ul>
                    <ul><button variant="primary">fact</button></ul>
            <input type="text" className={header.titleInput}/>
            </li>
            </div>
        </div>
    )

}

export default Header;