import React from 'react';

const UserComment = ({name, time, text, picture}) => {
    return (
        <>

        
    
    <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={picture} alt="profile" />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        {name}
                    </a>
                    <div className='metadata'>
                    <span className='date'>
                        {time}
                    </span>
                    </div>
                    <div className='text'>
                        {text}
                    </div>
                </div>

            </div>
            </>
    );
}

export default UserComment;