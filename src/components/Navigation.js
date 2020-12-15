import React from 'react';
import { Link } from "react-router-dom"
import "./Navigation.css";

function Navigation(){
    return ( 
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

/* 
    Html 같은 경우 a herf 클릭시 새로고침을 함. 매번~~ 새로고침을 하게되어
    react 가 죽어버림. 즉 react 에서 a href 호출을 하게되서 리액트가 죽음.

    따라서 a href 대신 react - router - dom 의 Link 를 사용 
    a href -> Link to 대체

    Link 는 router 안에서 동작합니당.
*/

export default Navigation;