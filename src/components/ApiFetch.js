import { useState, useEffect } from "react";

const ApiFetch = (props) => {
    const [userObj, setUserObj] = useState({})

    useEffect(() => {
        console.log("bahahaha...")
        const getUser = async()=>{
            let response = await fetch('https://api.github.com/users/' + props.userName)
            response = await response.json()
            setUserObj(response)
        }
        getUser()
    }, []);

    return(
        <>
            <h2>API PART</h2>
            <p>{userObj.url}</p>
            <p>{userObj.bio}</p>
            <img src={userObj.avatar_url} />
        </>
    )
}

export default ApiFetch;