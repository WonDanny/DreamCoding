import { useState, useEffect } from "react";

export const useFriends = ({girlFriendsOnly}) => {

    const [friends, setFriends] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        setLoading(true);
        setError(undefined);
        
        fetch(`data/${girlFriendsOnly ? 'girlFriends' : 'allFriends'}.json`)
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                setFriends(data)
                setLoading(false)
            }, 1000);
        })
        .catch((e) => setError('에러가 발생했습니다.'))

    }, [girlFriendsOnly]);
    return [loading, error, friends];
};