import React from "react";

export const Avatar = ({imgUrl, newPerson}) => {
    return (
        <div className="avatar">
            {newPerson && (
                <div className="new">
                    <span>
                        NEW
                    </span>
                </div>
            )}
            <img
                className="photo"
                src={imgUrl} alt="" 
            />
            <div>
                hello
            </div>
        </div>
    );
};