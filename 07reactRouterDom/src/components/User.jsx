import { useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom";
const User=()=>{
    const params= useParams();
    const location= useLocation();
    const [searchParams, setParams]= useSearchParams();
    let navigate= useNavigate();
    return(
        <>
            <h1>Hi I am, User Page {params.userID}, and His name is, {searchParams.get("name")}</h1>
            <button onClick={()=>{setParams({name:(searchParams.get("name")=='ajay' || searchParams.get("name")=='' )?"VIJAY":'ajay'   }); window.location.reload();}}>Update name</button>
            <button className='bg-red-500' onClick={()=>navigate('/helpdesk', {state:{userId:999}})}>Click Me</button>

        </>
    )
}

export default User;
