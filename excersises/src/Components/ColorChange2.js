import React, { useState } from 'react';

const ColorChange2 = () => {
    const [color, setColor] = useState('');
    const [displayColor, setDisplayColor] = useState('');

    function handleColor() {
        setDisplayColor(color); // Set the displayColor state to the current color value
    }

    return (
        <div>
            <h1 style={{color:displayColor}}>{displayColor}</h1>
            <input type='text' placeholder='Enter any color in text' onChange={(event) => setColor(event.target.value)} />
            <button onClick={handleColor}>Click here</button>
        </div>
    );
}

export default ColorChange2;
