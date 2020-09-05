import React from 'react';

const Friends = ({friend}) =>{
    return(
        <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age} years old</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default Friends; 