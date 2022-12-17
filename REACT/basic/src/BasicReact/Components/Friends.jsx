import React from "react";
import { useState, useEffect } from "react";


export const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    console.log('loading', loading)
    const handleCheckBox = () => setIsChecked((prev) => !prev);

    useEffect( () => {
        setLoading(true);

        fetch(`data/${isChecked ? 'girlFriends' : 'boyFriends'}.json`)
        .then((res) => res.json())
        .then((data) => {
            for(let i = 0; i < 3000; i++) {
                console.log('데이터 가져오는중입니다.')
            }
            console.log('네트워크에서 데이터를 받아왔습니다.');
            setFriends(data);   

        }).then((res) => {
            setLoading(false);

        })
        .catch((e) => setError('에러가 발생했습니다.'))
        
        
        return () => {
            console.log('깨끗하게 청소하는 일들을 합니다.')
        }
    }, [isChecked]);

    return(
        <>
            {loading ? (
                <p>loading....</p>
            ) : (
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
            )}
        </>
        
    );
};