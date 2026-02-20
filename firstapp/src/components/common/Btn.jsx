import React from "react";

export default function Btn(props) {
    console.log(props.value);
    return (
        <div>
            <button style={{background:props.color, padding:"10px 25px", color:"white"}}>
               {props.value}             
            </button>
        </div>
    );
}