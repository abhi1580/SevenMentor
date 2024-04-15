import React, { useState } from 'react';

const ToggleTextUsingUseState = () => {
    const [isLoggedin, setLoggedin] = useState(false);

    const checkUser = () => {
        // Toggle the value of isLoggedin
        setLoggedin(!isLoggedin);
    }

    return (
        <div>
            {isLoggedin ? <p>Welcome to User Panel!!</p> : <p>Welcome to Admin Panel!!</p>}
            {/* Alternatively, you can use conditional rendering with && operator */}
            {/* {isLoggedin && <p>Welcome to User</p>} */}
            <button onClick={checkUser}>Toggle Login</button>
        </div>
    );
}

export default ToggleTextUsingUseState;
