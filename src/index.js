import React from 'react';
import ReactDOM from 'react-dom';
import Profile2 from './images/pic2.jpg';
import Profile1 from './images/pic1.png';
import Profile3 from './images/pic3.jpg';

import UserComment from './components/UserComment';
import UserCard from './components/UserCard';


const App = () => {
    return (
        <>
        <div>
            <UserCard >
            <UserComment 
                name='Sarah'
                time='Today at 5:00PM' 
                text={('Lorem Ipsum').repeat(5)} 
                picture={Profile1}
            /> 
            </UserCard>
        </div>
        <div className='ui comments'>
            <UserComment 
                name='Sarah'
                time='Today at 5:00PM' 
                text={('Lorem Ipsum').repeat(5)} 
                picture={Profile1}
            /> 
            <UserComment 
                name='Alex'
                time='Today at 3:00PM'
                text={('Lorem Ipsum').repeat(5)}
                picture={Profile2}
            /> 
            <UserComment 
                name='Jack' 
                time='Today at 4:00AM' 
                text={('Lorem Ipsum').repeat(5)} 
                picture={Profile3}
            /> 
        </div>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)