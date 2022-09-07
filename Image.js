import React from "react";
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import react from './images/react.png';


function Image () {
    return (
        <div className="App" style={{ width: "100%", padding: "15%"}}>
            <img src={html}  alt='html icon' />
            <img src={css}  alt='css icon' />
            <img src={javascript}  alt='javascript icon' />
            <img src={react}  alt='react icon' />
        </div>
    )
}

export default Image;