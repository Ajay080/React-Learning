import {useLocation} from 'react-router-dom';
const HelpDesk=()=>{
    let location= useLocation();
    console.log("location:", location);
    let userId=location.state?.userId || 'No ID';
    return(
        <>
            <h1>Hi I am, Help Desk Page</h1>
            <p>User ID: {userId}</p>
        </>
    )
}

export default HelpDesk;
