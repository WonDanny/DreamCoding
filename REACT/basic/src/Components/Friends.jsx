import React from "react";
import { useState, useEffect } from "react";


export const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBox = () => setIsChecked((prev) => !prev);

    useEffect( () => {
        fetch(`data/${isChecked ? 'girlFriends' : 'boyFriends'}.json`)
        .then((res) => res.json())
        .then((result) => setFriends(result));

        return () => {
            console.log('깨끗하게 청소하는 일들을 합니다.')
        }
    }, [isChecked]);

    return(
        <div className="friends">
            <div className="checkBoxForGirlfriend">
                <input 
                    id="checkBox"
                    type="checkBox" 
                    value={isChecked}
                    onChange={handleCheckBox}
                />
                <label htmlFor="checkBox">여사친만 보기</label>
            </div>
            <ul className="friendsList">
                {friends && (friends.map((friend) => (
                    <li key={friend.id} className="li">
                        <h2>이름 : {friend.name}</h2>
                        <article>
                            <h3>나이 : {friend.age}</h3>
                            <h3>성별 : {friend.gender}</h3>
                        </article>
                    </li>
                )))}
            </ul>
        </div>
    );
};