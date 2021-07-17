import React from 'react';

const HandleName = (props) => {
   
    return (
        <div>
            <button onClick={()=>props.clickHandler(props.fullName)} >Click me</button>
        </div>
    )
}

export default HandleName;
