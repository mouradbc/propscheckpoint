import React from 'react'
import HandleName from "./HandleName";
import Proptypes from "prop-types"
export const Profile = (props) => {
    function clickHandler( name){
        // e.preventDefault();
         alert(name)
     }
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.profession}</h1>
         <image></image> 
         <HandleName clickHandler={clickHandler} fullName="foulen"/>  
        </div>
    )
}
Profile.defaultProps={
    fullName:"the_name",
    bio:"the_bio",
    profession:"the_profession"

}
Profile.propTypes={
    fullName:Proptypes.string,
    bio:Proptypes.string,
    profession:Proptypes.string
}
