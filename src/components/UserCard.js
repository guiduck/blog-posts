import React from "react";

const UserCard = (Props)=>{
    return (
        <div className="ui card">
            <div className="content">
                <div className='header'>
                    Alex Jones
                </div>
                <div className='description'>
                    {Props.children}
                    Hallo my name Alex, me live in istanbul.
                </div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
                Add Frend
            </div>
        </div>
    );
}

export default UserCard;