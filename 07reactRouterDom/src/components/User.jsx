import { useLocation, useParams, useSearchParams } from "react-router-dom";
const User=()=>{
    const params= useParams();
    const location= useLocation();
    const [searchParams, setParams]= useSearchParams();
    return(
        <>
            <h1>Hi I am, User Page {params.userID}, and His name is, {searchParams.get("name")}</h1>
            <button onClick={()=>{setParams({name:(searchParams.get("name")=='ajay' || searchParams.get("name")=='' )?"VIJAY":'ajay'   }); window.location.reload();}}>Update name</button>
        </>
    )
}

export default User;
