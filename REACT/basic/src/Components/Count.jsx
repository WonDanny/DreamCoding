import React from "react";
import { useState } from "react";

export const Count = ({totalCount, onClick}) => {
    const [number, setNumber] = useState(0);

    return (
        <div className="counterContainer">
            <div className="counter">
                <span className="number">{number}/{totalCount}</span>
                <button 
                    className="addBtn"
                    onClick={() => {
                        setNumber((prev) => prev +1);
                        onClick();
                    }}
                >
                    Add +
                </button>
            </div>
        </div>
    )
};

