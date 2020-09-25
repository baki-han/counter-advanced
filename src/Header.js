import React, { useState } from "react";


function Header(props){
    const [val, setValue] = useState("");

    const inputHandler = (event) =>{
        setValue(event.target.value);
    }

    const buttonHahadler = () =>{
        props.addButton(val);
        setValue("");
    }

    return (<div>
        <input type="number" onChange={inputHandler} value={val}/>
        <button onClick={buttonHahadler}>create</button>
    </div>);
}

export default Header;
