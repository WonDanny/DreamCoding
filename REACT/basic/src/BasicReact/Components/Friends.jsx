import React, { useState} from "react";
import {useFriends} from '../../hooks/useFriends';


export const Friends = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, error, friends] = useFriends({girlFriendsOnly:isChecked});
        
    const handleCheckBox = () => setIsChecked((prev) => !prev);

    if(loading) return <p>loading....</p>
    if(error) return <p>{error}</p>
    console.log('test');
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