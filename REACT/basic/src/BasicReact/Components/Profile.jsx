import React from "react";
import { Avatar } from "./Avatar";


export const Profile = ({name, job, imgUrl, newPerson}) => {
    return (
        <div className="profile">
            <Avatar imgUrl={imgUrl} newPerson={newPerson} />
            <h1>{name}</h1>
            <p>{job}</p>
            asd
        </div>
    );
};