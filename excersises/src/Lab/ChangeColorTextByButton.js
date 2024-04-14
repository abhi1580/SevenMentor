import React, { useState } from 'react';

const ChangeColorTextByButton = () => {
    const [displayColor, setDisplayColor] = useState('');

    return (
        <div>
            <h1 style={{ color: displayColor }}>The text in heading will change according to the button you clicked!!</h1>
            <button style={{backgroundColor:"red"}} onClick={() => setDisplayColor("red")}>Red</button>
            <button style={{backgroundColor:"yellow"}} onClick={() => setDisplayColor("yellow")}>Yellow</button>
            <button style={{backgroundColor:"green"}} onClick={() => setDisplayColor("green")}>Green</button>
            <button style={{backgroundColor:"cyan"}} onClick={() => setDisplayColor("cyan")}>Cyan</button>
            <button style={{backgroundColor:"magenta"}} onClick={() => setDisplayColor("magenta")}>Magenta</button>
        </div>
    );
}

export default ChangeColorTextByButton;
