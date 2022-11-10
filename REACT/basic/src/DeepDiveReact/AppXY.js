import { useState } from 'react';

import './style/AppXY.css';

function AppXY() {
    const [position, setPosition] = useState({x: 0, y: 0})

    return(
        <div 
            className="container" 
            onPointerMove={(e) => {
                // setPosition((prev) => ({x: e.clientX, y: prev.y}));
                setPosition({x: e.clientX, y: e.clientY});
            }}
        >
            <div 
                className='pointer'
                style={{transform: `translate(${position.x}px, ${position.y}px)`}}
            />
        </div>
    );
};

export default AppXY;